"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Link from "next/link";
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

const oceanData = [
  { time: "00:00", temperature: 22.5, salinity: 34.8, current: 0.5 },
  { time: "04:00", temperature: 22.4, salinity: 34.9, current: 0.4 },
  { time: "08:00", temperature: 22.8, salinity: 34.9, current: 0.6 },
  { time: "12:00", temperature: 23.5, salinity: 35.0, current: 0.8 },
  { time: "16:00", temperature: 23.8, salinity: 34.9, current: 0.7 },
  { time: "20:00", temperature: 23.2, salinity: 34.8, current: 0.6 },
];

const chartConfig = {
  temperature: {
    label: "Temperature (°C)",
    color: "hsl(var(--chart-1))",
  },
  salinity: {
    label: "Salinity (PSU)",
    color: "hsl(var(--chart-2))",
  },
};

export function OceanData() {
  return (
    <Link href="/preview">
        <Card className="shadow-lg h-full transition-all hover:shadow-xl hover:border-primary/50">
        <CardHeader>
            <CardTitle>Live Ocean Data</CardTitle>
            <CardDescription>Temperature, Salinity, and Currents</CardDescription>
        </CardHeader>
        <CardContent>
            <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                data={oceanData}
                margin={{
                    top: 5,
                    right: 10,
                    left: 10,
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
                    yAxisId="left"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => `${value}°C`}
                />
                    <YAxis
                    yAxisId="right"
                    orientation="right"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />
                <Line
                    yAxisId="left"
                    dataKey="temperature"
                    type="natural"
                    stroke="var(--color-temperature)"
                    strokeWidth={2}
                    dot={false}
                />
                <Line
                    yAxisId="right"
                    dataKey="salinity"
                    type="natural"
                    stroke="var(--color-salinity)"
                    strokeWidth={2}
                    dot={false}
                />
                </LineChart>
            </ResponsiveContainer>
            </ChartContainer>
        </CardContent>
        </Card>
    </Link>
  );
}
