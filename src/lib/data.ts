import { Users, Database, FileText, BarChart } from 'lucide-react';

export const statsCardsData = [
  {
    title: 'Total Datasets',
    value: '1,250',
    change: 12.5,
    icon: Database,
  },
  {
    title: 'Active Researchers',
    value: '350',
    change: 5.2,
    icon: Users,
  },
  {
    title: 'Reports Generated',
    value: '890',
    change: 20.1,
    icon: FileText,
  },
  {
    title: 'API Calls Today',
    value: '23,591',
    change: -2.8,
    icon: BarChart,
  },
];

export const fishPopulationData = [
  { year: 2018, pelagic: 32000, demersal: 21000 },
  { year: 2019, pelagic: 35000, demersal: 23000 },
  { year: 2020, pelagic: 33000, demersal: 22000 },
  { year: 2021, pelagic: 38000, demersal: 26000 },
  { year: 2022, pelagic: 41000, demersal: 28000 },
  { year: 2023, pelagic: 45000, demersal: 31000 },
  { year: 2024, pelagic: 43000, demersal: 29000 },
];

export const speciesDistributionData = [
    { name: 'Arabian Sea', value: 456 },
    { name: 'Bay of Bengal', value: 321 },
    { name: 'Indian Ocean', value: 789 },
    { name: 'Andaman Sea', value: 210 },
    { name: 'Laccadive Sea', value: 150 },
];

export const recentUploadsData = [
    { name: 'INCOIS Buoy Data Q2', type: 'Oceanographic', date: '2024-07-28', user: { name: 'Dr. Anya Sharma', id: 'anya-sharma' } },
    { name: 'Tuna Catch Report', type: 'Fisheries', date: '2024-07-27', user: { name: 'Rajesh Kumar', id: 'rajesh-kumar' } },
    { name: 'Coral Reef Survey', type: 'Biodiversity', date: '2024-07-26', user: { name: 'Dr. Ben Carter', id: 'ben-carter' } },
    { name: 'SEAMAP Trawl Data', type: 'Fisheries', date: '2024-07-25', user: { name: 'Maria Garcia', id: 'maria-garcia' } },
];
