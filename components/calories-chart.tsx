"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

const data = [
  { day: "Seg", consumidas: 2100, meta: 2200 },
  { day: "Ter", consumidas: 2050, meta: 2200 },
  { day: "Qua", consumidas: 2300, meta: 2200 },
  { day: "Qui", consumidas: 1950, meta: 2200 },
  { day: "Sex", consumidas: 2150, meta: 2200 },
  { day: "Sáb", consumidas: 2400, meta: 2200 },
  { day: "Dom", consumidas: 1847, meta: 2200 },
];

export function CaloriesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calorias Semanais</CardTitle>
        <CardDescription>Acompanhe seu consumo calórico diário</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            consumidas: {
              label: "Calorias Consumidas",
              color: "hsl(142, 76%, 36%)", // Verde
            },
            meta: {
              label: "Meta Diária",
              color: "hsl(221, 83%, 53%)", // Azul
            },
          }}
          className="h-[300px]"
        >
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="day"
              className="text-xs"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              className="text-xs"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              iconSize={8}
              formatter={(value) => (
                <span className="text-xs text-muted-foreground">{value}</span>
              )}
            />
            {/* Meta Diária - Azul */}
            <Area
              type="monotone"
              dataKey="meta"
              name="Meta Diária"
              stroke="hsl(221, 83%, 53%)"
              fill="hsl(221, 83%, 53%)"
              fillOpacity={0.1}
              strokeWidth={2}
              strokeDasharray="4 2"
            />
            {/* Calorias Consumidas - Verde */}
            <Area
              type="monotone"
              dataKey="consumidas"
              name="Calorias Consumidas"
              stroke="hsl(142, 76%, 36%)"
              fill="hsl(142, 76%, 36%)"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>

        {/* Legenda adicional abaixo do gráfico */}
        <div className="flex flex-wrap gap-4 mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "hsl(142, 76%, 36%)" }}
            />
            <span>Calorias Consumidas</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full border-2 border-dashed"
              style={{ borderColor: "hsl(221, 83%, 53%)" }}
            />
            <span>Meta Diária (2.200 kcal)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
