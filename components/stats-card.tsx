import { Activity, Flame, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

type StatsCard = {
  title: string;
  value: string | number;
  target?: string;
  icon: any;
  unit?: "kg" | "%";
  change: string;
  changeLabel: string;
  href: string;
};

const mockStats: StatsCard[] = [
  {
    title: "Calorias Hoje",
    value: "1,850",
    target: "/ 2,400",
    icon: Flame,
    change: "+12%",
    changeLabel: "vs. ontem",
    href: "/calorias",
  },
  {
    title: "Treinos Semana",
    value: "4",
    target: "/ 5",
    icon: Activity,
    change: "80%",
    changeLabel: "da meta",
    href: "/treinos",
  },
  {
    title: "Peso Atual",
    value: "78.5",
    unit: "kg",
    icon: TrendingUp,
    change: "-1.2kg",
    changeLabel: "este mês",
    href: "/peso",
  },
  {
    title: "Meta Semanal",
    value: "85%",
    icon: Target,
    change: "No caminho",
    changeLabel: "certo",
    href: "/metas",
  },
];

export function StatsCard({ stats = mockStats }: { stats?: StatsCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const CardWrapper = stat.href ? Link : "div";

        return (
          <CardWrapper
            key={stat.title}
            href={stat.href}
            className={stat.href ? "block" : undefined}
          >
            <Card className="hover:bg-accent/5 transition-colors cursor-pointer h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardDescription className="text-sm font-medium">
                  {stat.title}
                </CardDescription>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-sm text-muted-foreground font-normal ml-1">
                      {stat.unit}
                    </span>
                  )}
                  {stat.target && (
                    <span className="text-sm text-muted-foreground font-normal ml-1">
                      {stat.target}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span
                    className={
                      stat.change.startsWith("+")
                        ? "text-green-600 font-medium"
                        : stat.change.startsWith("-")
                        ? "text-red-600 font-medium"
                        : "text-foreground font-medium"
                    }
                  >
                    {stat.change}
                  </span>{" "}
                  {stat.changeLabel}
                </p>
              </CardContent>
            </Card>
          </CardWrapper>
        );
      })}
    </div>
  );
}
