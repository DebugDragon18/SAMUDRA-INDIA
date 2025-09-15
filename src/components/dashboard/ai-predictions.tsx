"use client"

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const fishStockData = [
    { species: 'Tuna', stock: 85, trend: 2 },
    { species: 'Sardine', stock: 92, trend: -1 },
    { species: 'Mackerel', stock: 78, trend: 5 },
    { species: 'Anchovy', stock: 65, trend: -3 },
    { species: 'Hilsa', stock: 88, trend: 4 },
];

const weatherData = [
    { day: 'Mon', temp: 28, condition: 'Sunny' },
    { day: 'Tue', temp: 29, condition: 'Sunny' },
    { day: 'Wed', temp: 27, condition: 'Partly Cloudy' },
    { day: 'Thu', temp: 26, condition: 'Showers' },
    { day: 'Fri', temp: 27, condition: 'Sunny' },
]

const chartConfig = {
  stock: {
    label: "Stock Level (%)",
    color: "hsl(var(--chart-1))",
  },
};

export function AiPredictions() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Advanced AI Predictions</CardTitle>
        <CardDescription>Fish Stock Trends & Weather Forecasts</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8 md:grid-cols-2">
        <div>
            <h3 className="font-semibold text-foreground mb-2">Fish Stock Trends</h3>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fishStockData} margin={{ left: -20 }}>
                    <XAxis dataKey="species" tickLine={false} axisLine={false} tickMargin={10} />
                    <YAxis tickLine={false} axisLine={false} tickMargin={10} />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                    />
                    <Bar dataKey="stock" fill="var(--color-stock)" radius={4} />
                </BarChart>
            </ResponsiveContainer>
            </ChartContainer>
        </div>
        <div>
            <h3 className="font-semibold text-foreground mb-2">5-Day Weather Forecast</h3>
            <div className="grid grid-cols-5 gap-2 text-center">
                {weatherData.map(day => (
                    <div key={day.day} className="p-2 rounded-lg bg-muted/50">
                        <p className="font-semibold">{day.day}</p>
                        <p className="text-2xl font-bold text-primary">{day.temp}°</p>
                        <p className="text-xs text-muted-foreground">{day.condition}</p>
                    </div>
                ))}
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
