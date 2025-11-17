"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "@/lib/auth-client";
import {
  Bell,
  Crown,
  LogOut,
  Menu,
  Settings,
  Sparkles,
  User,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";
import { SubscriptionBadge } from "./subscription-badge";

export function DashboardHeader() {
  const session = useSession();
  const router = useRouter();
  console.log(session);
  async function logout() {
    console.log("saindo...");
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          console.log("Usuário deslogado com sucesso");
          router.push("/login");
        },
      },
    });
  }

  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">FitTracker</h1>
              <p className="text-xs text-muted-foreground">
                Seu assistente fitness
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
            </Link>
            <Link href="/treinos">
              <Button variant="ghost" size="sm">
                Treinos
              </Button>
            </Link>
            <Link href="/dieta">
              <Button variant="ghost" size="sm">
                Dieta
              </Button>
            </Link>
            <Link href="/calorias">
              <Button variant="ghost" size="sm">
                Calorias
              </Button>
            </Link>
            <Link href="/chat-ai">
              <Button variant="ghost" size="sm" className="gap-2">
                <Sparkles className="h-4 w-4" />
                AI Coach
              </Button>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {session?.data?.user.Subscripiton === "free" && (
              <Link href="/checkout">
                <Button size="sm" className="gap-2">
                  <Crown className="h-4 w-4" />
                  Upgrade
                </Button>
              </Link>
            )}
            <Link href="/convites">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-transparent"
              >
                <UserPlus className="h-4 w-4" />
                <span className="hidden lg:inline">Convidar</span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={session?.data?.user?.image || "/placeholder.svg"}
                      alt={session?.data?.user?.name}
                    />
                    <AvatarFallback>
                      {session?.data?.user?.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {session?.data?.user?.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {session?.data?.user?.email}
                    </p>
                    <div className="pt-1">
                      <SubscriptionBadge />
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/checkout" className="flex w-full">
                    <Crown className="mr-2 h-4 w-4" />
                    <span>Planos e Assinatura</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/convites" className="flex w-full">
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Convidar Amigos</span>
                  </Link>
                </DropdownMenuItem>
                {session?.data?.user?.role === "admin" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/admin" className="flex w-full text-primary">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Painel Admin</span>
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configurações</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
