"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CoralReef } from '@/lib/coral-reef-data';

interface ReefFiltersProps {
  allReefs: CoralReef[];
  setFilteredReefs: (reefs: CoralReef[]) => void;
}

export function ReefFilters({ allReefs, setFilteredReefs }: ReefFiltersProps) {
  const [regionFilter, setRegionFilter] = useState('all');
  const [healthFilter, setHealthFilter] = useState('all');

  useEffect(() => {
    let reefs = allReefs;
    if (regionFilter !== 'all') {
      reefs = reefs.filter(r => r.region === regionFilter);
    }
    if (healthFilter !== 'all') {
      reefs = reefs.filter(r => r.health === healthFilter);
    }
    setFilteredReefs(reefs);
  }, [regionFilter, healthFilter, allReefs, setFilteredReefs]);
  
  const regions = ['all', ...Array.from(new Set(allReefs.map(r => r.region)))];
  const healthStatus = ['all', 'Healthy', 'Warning', 'Alert'];

  return (
    <Card className="shadow-lg">
      <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-center">
        <h3 className="font-semibold text-lg shrink-0">Filters</h3>
        <div className="grid grid-cols-2 gap-4 w-full">
            <div className="space-y-1">
                <Label htmlFor="region-filter">Region</Label>
                <Select value={regionFilter} onValueChange={setRegionFilter}>
                    <SelectTrigger id="region-filter">
                        <SelectValue placeholder="Select Region" />
                    </SelectTrigger>
                    <SelectContent>
                        {regions.map(r => <SelectItem key={r} value={r}>{r === 'all' ? 'All Regions' : r}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-1">
                <Label htmlFor="health-filter">Health Status</Label>
                 <Select value={healthFilter} onValueChange={setHealthFilter}>
                    <SelectTrigger id="health-filter">
                        <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                        {healthStatus.map(s => <SelectItem key={s} value={s}>{s === 'all' ? 'All Statuses' : s}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
