"use client";

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { speciesDistributionData } from "@/lib/data";

const chartConfig = {
  value: {
    label: "Sightings",
    color: "hsl(var(--chart-1))",
  },
};

export function SpeciesDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Species Distribution</CardTitle>
        <CardDescription>Sightings by region</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={speciesDistributionData}
              layout="vertical"
              margin={{ left: 10, right: 10 }}
            >
              <YAxis
                dataKey="name"
                type="category"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                className="text-xs"
                width={80}
              />
              <XAxis dataKey="value" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar dataKey="value" fill="var(--color-value)" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
