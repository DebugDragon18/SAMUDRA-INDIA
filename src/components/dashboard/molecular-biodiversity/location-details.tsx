"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LocationData } from '@/lib/molecular-data';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';
import { SequenceModal } from './sequence-modal';

interface LocationDetailsProps {
  location: LocationData;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export function LocationDetails({ location }: LocationDetailsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pieData = location.biodiversity.map(s => ({ name: s.taxa_name, value: s.abundance }));
  const topTaxa = [...location.biodiversity].sort((a, b) => b.abundance - a.abundance).slice(0, 3);

  return (
    <>
      <Card className="shadow-lg h-full flex flex-col">
        <CardHeader>
          <CardTitle>{location.name}</CardTitle>
          <CardDescription>
            {location.lat}°N, {location.lon}°E | Depth: {location.depth} | {location.date}
          </CardDescription>
        </CardHeader>
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
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
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
          <Button onClick={() => setIsModalOpen(true)} className="mt-auto">View Sequences</Button>
        </CardContent>
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
