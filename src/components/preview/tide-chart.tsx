"use client"

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

const tideData = [
    { time: '00:00', level: 1.2 },
    { time: '02:00', level: 0.5 },
    { time: '04:00', level: 1.8 },
    { time: '06:00', level: 2.5 },
    { time: '08:00', level: 1.5 },
    { time: '10:00', level: 0.8 },
    { time: '12:00', level: 1.4 },
    { time: '14:00', level: 2.2 },
    { time: '16:00', level: 2.9 },
    { time: '18:00', level: 2.0 },
    { time: '20:00', level: 1.1 },
    { time: '22:00', level: 0.7 },
];

const chartConfig = {
  level: {
    label: "Tide Level (m)",
    color: "hsl(var(--chart-1))",
  },
};

export function TideChart() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto">
            <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Tide Level Visualization</CardTitle>
                <CardDescription>24-hour tide forecast for a selected location.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="aspect-auto h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    data={tideData}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="time"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => `${value}m`}
                    />
                    <Tooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                    />
                    <Line
                        dataKey="level"
                        type="natural"
                        stroke="var(--color-level)"
                        strokeWidth={3}
                        dot={{ r: 5, fill: "var(--color-level)" }}
                    />
                    </LineChart>
                </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
            </Card>
        </div>
    </section>
  );
}
