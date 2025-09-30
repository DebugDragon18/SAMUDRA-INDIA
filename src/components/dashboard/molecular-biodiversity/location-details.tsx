"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LocationData } from '@/lib/molecular-data';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';
import { SequenceModal } from './sequence-modal';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LocationDetailsProps {
  location: LocationData;
}

const COLORS = ['#0CB5E4', '#17B877', '#FBBF24', '#F87171', '#8B5CF6'];

export function LocationDetails({ location }: LocationDetailsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pieData = location.biodiversity.map(s => ({ name: s.taxa_name, value: s.abundance }));
  const topTaxa = [...location.biodiversity].sort((a, b) => b.abundance - a.abundance).slice(0, 5);

  return (
    <>
      <Card className="shadow-lg h-full flex flex-col max-h-[calc(100vh-180px)] backdrop-blur-sm bg-background/80">
        <CardHeader>
          <CardTitle>{location.name}</CardTitle>
          <CardDescription>
            {location.lat}°N, {location.lon}°E | Depth: {location.depth}m | {location.date}
          </CardDescription>
        </CardHeader>
        <ScrollArea className="flex-1">
            <CardContent className="flex-1 flex flex-col gap-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Diversity Indices</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Shannon Index</p>
                        <p className="text-2xl font-bold text-primary">{location.shannon_index}</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Simpson Index</p>
                        <p className="text-2xl font-bold text-primary">{location.simpson_index}</p>
                    </div>
                    </div>
                </div>
                <div className="flex-1 min-h-[200px]">
                    <h3 className="text-lg font-semibold mb-2">Species Composition</h3>
                    <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2} labelLine={false} label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                            return percent > 0.05 ? (<text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12}>{`${(percent * 100).toFixed(0)}%`}</text>) : null;
                        }}>
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                        <Tooltip />
                        <Legend iconSize={10} />
                    </PieChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Dominant Taxa</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Taxa</TableHead>
                                <TableHead className="text-right">Abundance</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {topTaxa.map(taxa => (
                                <TableRow key={taxa.id}>
                                    <TableCell className="font-medium">{taxa.taxa_name}</TableCell>
                                    <TableCell className="text-right">{taxa.abundance}%</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </ScrollArea>
        <div className="p-6 pt-0">
            <Button onClick={() => setIsModalOpen(true)} className="w-full">View All Sequences</Button>
        </div>
      </Card>
      <SequenceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sequences={location.biodiversity}
        locationName={location.name}
      />
    </>
  );
}
