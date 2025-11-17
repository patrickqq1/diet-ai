// Below is an example implementation adding Google sign-in to your RegisterPage.
// Adjust imports, components, and your auth-client as needed.

"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // ensure signIn.google exists
import { zodResolver } from "@hookform/resolvers/zod";
import { Chrome, Dumbbell, Loader2, UserPlus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "O nome deve ter pelo menos 2 caracteres")
      .max(100, "O nome deve ter no máximo 100 caracteres")
      .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "O nome deve conter apenas letras e espaços"),
    email: z
      .string()
      .email("Por favor, insira um email válido")
      .min(1, "O email é obrigatório"),
    password: z
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/[0-9]/, "A senha deve conter pelo menos um número")
      .regex(
        /[^A-Za-z0-9]/,
        "A senha deve conter pelo menos um caractere especial"
      ),
    confirmPassword: z.string().min(1, "A confirmação de senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      setError("root", {
        type: "manual",
        message:
          error instanceof Error
            ? error.message
            : "Erro ao criar conta. Tente novamente.",
      });
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const response = await signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
        errorCallbackURL: "/login/error",
      });
    } catch (error) {
      console.error("Erro ao autenticar com Google:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary/20 via-background to-accent/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Dumbbell className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Criar conta</CardTitle>
          <CardDescription>
            <span className="flex items-center justify-center gap-2 text-primary">
              <UserPlus className="h-4 w-4" /> Você foi convidado para o
              FitTracker!
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center gap-2"
            onClick={handleGoogleSignUp}
          >
            <Chrome className="h-4 w-4" /> Continuar com Google
          </Button>
        </CardContent>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                type="text"
                disabled={isSubmitting}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                disabled={isSubmitting}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                disabled={isSubmitting}
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                disabled={isSubmitting}
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-destructive">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {errors.root && (
              <p className="text-sm text-destructive">{errors.root.message}</p>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Criando
                  conta...
                </>
              ) : (
                "Criar conta"
              )}
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Entrar
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
