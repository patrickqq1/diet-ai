// app/dashboard/page.tsx
import { CaloriesChart } from "@/components/calories-chart";
import { DashboardHeader } from "@/components/dashboard-header";
import { QuickActions } from "@/components/quick-actions";
import { StatsCard } from "@/components/stats-card";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await auth.api.getSession({
    headers: await headers(),
  });

  console.log("User session in dashboard:", user);

  if (!user) {
    redirect("/login");
  }
  const userStats = {
    streak: 7,
    level: "Intermediário",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 dark:from-slate-950 dark:via-blue-950/20 dark:to-emerald-950/20">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Bem-vindo de volta!
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Continue firme na sua jornada fitness. Cada dia conta! 💪
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="gap-2 py-1.5">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                {userStats.streak} dias seguidos
              </Badge>
              <Badge variant="outline" className="py-1.5">
                Nível {userStats.level}
              </Badge>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <StatsCard />

        {/* Charts and Actions Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <CaloriesChart />

            {/* Additional Metrics */}
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-orange-600">
                        Sono
                      </p>
                      <p className="text-2xl font-bold mt-1">7.2h</p>
                      <p className="text-xs text-orange-600 mt-1">
                        +0.5h vs ontem
                      </p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <span className="text-lg">😴</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-600">
                        Passos
                      </p>
                      <p className="text-2xl font-bold mt-1">8,542</p>
                      <p className="text-xs text-green-600 mt-1">82% da meta</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <span className="text-lg">👣</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <QuickActions />

            {/* Weekly Progress */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">
                  Progresso Semanal
                </CardTitle>
                <CardDescription>Resumo da sua semana</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Treinos Concluídos
                  </span>
                  <span className="font-bold">4/5</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Meta Calórica
                  </span>
                  <span className="font-bold">92%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "92%" }}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Hidratação
                  </span>
                  <span className="font-bold">75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-cyan-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
