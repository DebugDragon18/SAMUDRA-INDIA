"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadialBar, RadialBarChart, PolarAngleAxis } from 'recharts';
import { Waves } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const riskScore = 58; // Mock data
const aiInsight = "Coral bleaching risk is rising in the Andaman region due to a 1.2°C SST increase.";

const getRiskColor = (score: number) => {
  if (score >= 70) return 'text-green-500'; // Low Risk
  if (score >= 40) return 'text-yellow-500'; // Medium Risk
  return 'text-red-500'; // High Risk
};

const getRiskFillColor = (score: number) => {
    if (score >= 70) return '#22c55e';
    if (score >= 40) return '#eab308';
    return '#ef4444';
}

const chartData = [
  {
    name: 'RiskScore',
    value: riskScore,
    fill: getRiskFillColor(riskScore),
  },
];

export function BiodiversityRiskScore() {
  const riskColorClass = getRiskColor(riskScore);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto">
            <Link href="/dashboard/biodiversity-risk">
                <Card className="max-w-md mx-auto shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                           <Waves className="h-6 w-6 text-primary" />
                           Biodiversity Risk Score – Indian Ocean
                        </CardTitle>
                        <CardDescription>A real-time assessment of marine ecosystem health.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <div className="relative h-48 w-48">
                          {isClient && (
                            <RadialBarChart
                                width={192}
                                height={192}
                                cx="50%"
                                cy="50%"
                                innerRadius="70%"
                                outerRadius="100%"
                                barSize={20}
                                data={chartData}
                                startAngle={90}
                                endAngle={-270}
                            >
                                <PolarAngleAxis
                                    type="number"
                                    domain={[0, 100]}
                                    angleAxisId={0}
                                    tick={false}
                                />
                                <RadialBar
                                    background
                                    dataKey="value"
                                    cornerRadius={10}
                                    className="fill-primary"
                                />
                            </RadialBarChart>
                          )}
                             <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className={cn("text-5xl font-bold", riskColorClass)}>{riskScore}</span>
                                <span className="text-sm text-muted-foreground">/ 100</span>
                            </div>
                        </div>
                         <div className="mt-4 text-center p-4 bg-muted/50 rounded-lg">
                            <p className="text-sm font-semibold text-foreground">AI Insight:</p>
                            <p className="text-sm text-muted-foreground">{aiInsight}</p>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </div>
    </section>
  );
}
