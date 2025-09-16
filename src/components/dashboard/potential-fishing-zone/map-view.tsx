"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const advisoryData: { [key: string]: any[] } = {
  gujarat: [
    { district: "Amreli", advisories: 12, sst: "28.1°C", chlorophyll: "0.9 mg/m³", level: "High" },
    { district: "Bhavnagar", advisories: 8, sst: "28.3°C", chlorophyll: "0.7 mg/m³", level: "Moderate" },
    { district: "Jamnagar", advisories: 15, sst: "27.9°C", chlorophyll: "1.1 mg/m³", level: "High" },
    { district: "Porbandar", advisories: 10, sst: "28.0°C", chlorophyll: "0.8 mg/m³", level: "Moderate" },
    { district: "Kutch", advisories: 18, sst: "27.8°C", chlorophyll: "1.2 mg/m³", level: "High" },
    { district: "Gir Somnath", advisories: 14, sst: "28.2°C", chlorophyll: "1.0 mg/m³", level: "High" },
  ],
  maharashtra: [
    { district: "Mumbai", advisories: 9, sst: "28.5°C", chlorophyll: "0.6 mg/m³", level: "Moderate" },
    { district: "Ratnagiri", advisories: 11, sst: "28.6°C", chlorophyll: "0.8 mg/m³", level: "High" },
    { district: "Sindhudurg", advisories: 7, sst: "28.7°C", chlorophyll: "0.5 mg/m³", level: "Low" },
  ],
  kerala: [
    { district: "Kochi", advisories: 13, sst: "29.0°C", chlorophyll: "0.4 mg/m³", level: "High" },
    { district: "Kozhikode", advisories: 9, sst: "29.1°C", chlorophyll: "0.6 mg/m³", level: "Moderate" },
    { district: "Thiruvananthapuram", advisories: 6, sst: "29.2°C", chlorophyll: "0.3 mg/m³", level: "Low" },
  ],
};

const states = [
  { value: 'gujarat', label: 'Gujarat' },
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'kerala', label: 'Kerala' },
  { value: 'tamilnadu', label: 'Tamil Nadu' },
  { value: 'odisha', label: 'Odisha' },
]

export function MapView() {
  const [selectedState, setSelectedState] = useState('gujarat');
  const data = advisoryData[selectedState] || [];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <CardTitle>State-wise Fishing Advisory Data</CardTitle>
                <CardDescription>Select a state to view and download advisory data.</CardDescription>
            </div>
            <div className="flex gap-2">
                <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a State" />
                </SelectTrigger>
                <SelectContent>
                    {states.map(state => (
                        <SelectItem key={state.value} value={state.value}>{state.label}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
                <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Data
                </Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>District</TableHead>
              <TableHead className="text-right">Advisories Issued</TableHead>
              <TableHead className="text-right">Avg. SST</TableHead>
              <TableHead className="text-right">Avg. Chlorophyll</TableHead>
              <TableHead>Dominant Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? data.map((row) => (
              <TableRow key={row.district}>
                <TableCell className="font-medium">{row.district}</TableCell>
                <TableCell className="text-right">{row.advisories}</TableCell>
                <TableCell className="text-right">{row.sst}</TableCell>
                <TableCell className="text-right">{row.chlorophyll}</TableCell>
                <TableCell>{row.level}</TableCell>
              </TableRow>
            )) : (
                <TableRow>
                    <TableCell colSpan={5} className="text-center h-24">
                        No advisory data available for this state.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
