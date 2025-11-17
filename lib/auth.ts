import {
  SubscriptionPlan,
  SubscriptionStatus,
  USER_ROLE,
} from "@/generated/prisma/enums";
import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { customSession } from "better-auth/plugins";
import { prisma } from "./prisma";

// Tipos customizados para a sessão
export interface CustomUser {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role: USER_ROLE;
  subscription: {
    plan: SubscriptionPlan;
    status: SubscriptionStatus;
  } | null;
}

export interface CustomSession {
  expiresAt: Date;
  token: string;
  ipAddress?: string | null;
  user: CustomUser;
}

const options: BetterAuthOptions = {
  database: prismaAdapter(prisma, {
    provider: "mysql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  session: {
    expiresIn: 30 * 24 * 60 * 60,
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: "USER",
      },
    },
  },
  // Hook para criar subscription após criar usuário
  hooks: {
    after: [
      {
        matcher: (context) => {
          return context.path === "/sign-up/email";
        },
        handler: async (ctx) => {
          const userId = ctx.context.newUser?.id;

          if (!userId) return;

          try {
            // Criar subscription FREE para novo usuário
            await prisma.subscription.create({
              data: {
                userId: userId,
                plan: SubscriptionPlan.FREE,
                status: SubscriptionStatus.ACTIVE,
              },
            });

            // Criar UserProfile padrão (opcional)
            await prisma.userProfile.create({
              data: {
                userId: userId,
              },
            });
          } catch (error) {
            console.error("Error creating subscription/profile:", error);
          }
        },
      },
    ],
  },
  plugins: [],
};

const customSessionPlugin = customSession<CustomSession>(
  async ({ user, session }) => {
    // Buscar a subscription do usuário
    const userWithSubscription = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        Subscription: {
          select: {
            plan: true,
            status: true,
          },
        },
      },
    });

    const subscriptionData = userWithSubscription?.Subscription
      ? {
          plan: userWithSubscription.Subscription.plan,
          status: userWithSubscription.Subscription.status,
        }
      : null;

    return {
      expiresAt: session.expiresAt,
      token: session.token,
      ipAddress: session.ipAddress,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        role: (user as any).role as USER_ROLE,
        subscription: subscriptionData,
      },
    };
  }
);

options.plugins!.push(customSessionPlugin);
options.plugins!.push(nextCookies());

export const auth = betterAuth(options);
