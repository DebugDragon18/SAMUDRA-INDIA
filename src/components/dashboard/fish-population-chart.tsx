"use client";

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { fishPopulationData } from "@/lib/data";

const chartConfig = {
  pelagic: {
    label: "Pelagic",
    color: "hsl(var(--chart-1))",
  },
  demersal: {
    label: "Demersal",
    color: "hsl(var(--chart-2))",
  },
};

export function FishPopulationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fish Population Trends</CardTitle>
        <CardDescription>2018 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={fishPopulationData}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="year"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.toString()}
              />
               <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Line
                dataKey="pelagic"
                type="natural"
                stroke="var(--color-pelagic)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="demersal"
                type="natural"
                stroke="var(--color-demersal)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
