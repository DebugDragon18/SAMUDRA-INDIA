"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const liveData = [
  { zone: "North Arabian Sea", coordinates: "24.5°N, 65.2°E", sst: "28.5°C", chlorophyll: "0.8 mg/m³", advisory: "High" },
  { zone: "Bay of Bengal Coast", coordinates: "18.2°N, 85.1°E", sst: "29.1°C", chlorophyll: "1.2 mg/m³", advisory: "High" },
  { zone: "Andaman Islands", coordinates: "12.0°N, 92.8°E", sst: "28.8°C", chlorophyll: "0.5 mg/m³", advisory: "Moderate" },
  { zone: "Laccadive Sea", coordinates: "8.5°N, 75.3°E", sst: "29.5°C", chlorophyll: "0.3 mg/m³", advisory: "Low" },
];

export function LiveData() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Potential Fishing Zone - Live Data</CardTitle>
        <CardDescription>Real-time data from various potential fishing zones.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Zone</TableHead>
              <TableHead>Coordinates</TableHead>
              <TableHead>SST</TableHead>
              <TableHead>Chlorophyll-a</TableHead>
              <TableHead>Advisory</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {liveData.map((data) => (
              <TableRow key={data.zone}>
                <TableCell className="font-medium">{data.zone}</TableCell>
                <TableCell>{data.coordinates}</TableCell>
                <TableCell>{data.sst}</TableCell>
                <TableCell>{data.chlorophyll}</TableCell>
                <TableCell>
                  <Badge variant={data.advisory === "High" ? "default" : data.advisory === "Moderate" ? "secondary" : "destructive"}>
                    {data.advisory}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
