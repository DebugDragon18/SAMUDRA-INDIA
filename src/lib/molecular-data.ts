export type Sequence = {
  id: string;
  taxa_name: string;
  sequence_id: string;
  abundance: number;
};

export type LocationData = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  depth: string;
  date: string;
  shannon_index: number;
  simpson_index: number;
  biodiversity: Sequence[];
};

export const molecularData: LocationData[] = [
  {
    id: 'loc-001',
    name: 'Andaman Sea - Site A',
    lat: 12.5,
    lon: 92.8,
    depth: '50m',
    date: '2023-10-15',
    shannon_index: 2.8,
    simpson_index: 0.92,
    biodiversity: [
      { id: 'seq-01', taxa_name: 'Pocillopora damicornis', abundance: 35, sequence_id: 'MW123456' },
      { id: 'seq-02', taxa_name: 'Amphiprion ocellaris', abundance: 20, sequence_id: 'MW123457' },
      { id: 'seq-03', taxa_name: 'Chaetodon trifasciatus', abundance: 15, sequence_id: 'MW123458' },
      { id: 'seq-04', taxa_name: 'Acropora hyacinthus', abundance: 10, sequence_id: 'MW123459' },
      { id: 'seq-05', taxa_name: 'Other', abundance: 20, sequence_id: 'N/A' },
    ],
  },
  {
    id: 'loc-002',
    name: 'Bay of Bengal - Site B',
    lat: 18.0,
    lon: 85.5,
    depth: '100m',
    date: '2023-11-20',
    shannon_index: 3.1,
    simpson_index: 0.95,
    biodiversity: [
      { id: 'seq-06', taxa_name: 'Thunnus albacares', abundance: 40, sequence_id: 'MW123460' },
      { id: 'seq-07', taxa_name: 'Sardinella longiceps', abundance: 30, sequence_id: 'MW123461' },
      { id: 'seq-08', taxa_name: 'Rastrelliger kanagurta', abundance: 18, sequence_id: 'MW123462' },
      { id: 'seq-09', taxa_name: 'Dasyatis sp.', abundance: 7, sequence_id: 'MW123463' },
      { id: 'seq-10', taxa_name: 'Other', abundance: 5, sequence_id: 'N/A' },
    ],
  },
    {
    id: 'loc-003',
    name: 'Laccadive Sea - Site C',
    lat: 8.2,
    lon: 76.0,
    depth: '30m',
    date: '2024-01-05',
    shannon_index: 2.5,
    simpson_index: 0.88,
    biodiversity: [
      { id: 'seq-11', taxa_name: 'Chelonia mydas', abundance: 5, sequence_id: 'MW123464' },
      { id: 'seq-12', taxa_name: 'Holothuria scabra', abundance: 25, sequence_id: 'MW123465' },
      { id: 'seq-13', taxa_name: 'Siganus javus', abundance: 40, sequence_id: 'MW123466' },
      { id: 'seq-14', taxa_name: 'Other', abundance: 30, sequence_id: 'N/A' },
    ],
  },
];
