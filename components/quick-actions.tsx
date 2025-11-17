// components/quick-actions.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Apple, Droplets, Dumbbell, Plus, Sparkles } from "lucide-react";
import Link from "next/link";

export function QuickActions() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold">Ações Rápidas</CardTitle>
        <CardDescription>Registre suas atividades diárias</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Link href="/treinos/novo">
          <Button
            className="w-full justify-start gap-3 h-auto py-4 hover:scale-[1.02] transition-all duration-200 hover:shadow-md"
            variant="outline"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/20">
              <Dumbbell className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-base">Registrar Treino</p>
              <p className="text-sm text-muted-foreground">
                Adicione seu treino de hoje
              </p>
            </div>
            <Plus className="h-5 w-5 text-muted-foreground" />
          </Button>
        </Link>

        <Link href="/dieta/registrar">
          <Button
            className="w-full justify-start gap-3 h-auto py-4 hover:scale-[1.02] transition-all duration-200 hover:shadow-md"
            variant="outline"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
              <Apple className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-base">Adicionar Refeição</p>
              <p className="text-sm text-muted-foreground">
                Registre o que você comeu
              </p>
            </div>
            <Plus className="h-5 w-5 text-muted-foreground" />
          </Button>
        </Link>

        <Link href="/ai-coach">
          <Button className="w-full justify-start gap-3 h-auto py-4 hover:scale-[1.02] transition-all duration-200 hover:shadow-lg border-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-base">AI Coach</p>
              <p className="text-sm text-white/90">Tire suas dúvidas fitness</p>
            </div>
            <Plus className="h-5 w-5 text-white" />
          </Button>
        </Link>

        {/* Hydration Tracker */}
        <div className="pt-4 space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Droplets className="h-4 w-4 text-blue-500" />
            <span className="text-muted-foreground font-medium">
              Hidratação Hoje
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progresso</span>
              <span className="font-bold text-blue-600">1.8L / 3L</span>
            </div>
            <div className="h-3 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: "60%" }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0L</span>
              <span>Meta: 3L</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
