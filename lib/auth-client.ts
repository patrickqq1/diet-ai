import { CustomSession } from "@/lib/auth";
import { createAuthClient } from "better-auth/react";

// Criar o cliente de autenticação
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

// Hook tipado para usar no cliente
export const useSession = () => {
  const { data, ...rest } = authClient.useSession();

  return {
    data: data as CustomSession | null,
    ...rest,
  };
};

// Tipo de retorno para o getSession
export type SessionData = CustomSession | null;

// Helper para verificar role
export const hasRole = (session: CustomSession | null, role: string) => {
  return session?.user?.role === role;
};

// Helper para verificar subscription
export const hasActivePremium = (session: CustomSession | null) => {
  return (
    session?.user?.subscription?.status === "ACTIVE" &&
    (session?.user?.subscription?.plan === "PREMIUM" ||
      session?.user?.subscription?.plan === "PRO")
  );
};

// Helpers para autenticação
export const {
  signIn,
  signUp,
  signOut,
  useSession: useAuthSession,
} = authClient;
