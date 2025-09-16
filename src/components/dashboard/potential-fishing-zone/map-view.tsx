"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Pie, PieChart, Cell, Legend } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

const advisoryByDistrictData = [
  { district: "Amreli", advisories: 12 },
  { district: "Bhavnagar", advisories: 8 },
  { district: "Jamnagar", advisories: 15 },
  { district: "Porbandar", advisories: 10 },
  { district: "Kutch", advisories: 18 },
  { district: "Gir Somnath", advisories: 14 },
];

const advisoryLevelData = [
  { name: 'High', value: 400 },
  { name: 'Moderate', value: 300 },
  { name: 'Low', value: 300 },
];

const districtChartConfig = {
  advisories: {
    label: "Advisories",
    color: "hsl(var(--chart-1))",
  },
};

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-5))'];

export function MapView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Fishing Advisories by District (Gujarat)</CardTitle>
          <CardDescription>Number of potential fishing zone advisories issued.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={districtChartConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={advisoryByDistrictData} margin={{ top: 20, right: 20, bottom: 60, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="district" angle={-45} textAnchor="end" interval={0} />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="advisories" fill="var(--color-advisories)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Advisory Level Distribution</CardTitle>
          <CardDescription>Breakdown of advisory levels across all zones.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
           <ChartContainer config={{}} className="h-[400px] w-full">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={advisoryLevelData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {advisoryLevelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltipContent hideLabel />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
           </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
