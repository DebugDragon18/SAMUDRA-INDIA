export type ReefPoint = {
  lat: number;
  lng: number;
};

export type ReefPolygon = ReefPoint[];

export type ReefSubmission = {
  id: string;
  submittedBy: string;
  date: string;
  notes: string;
  imageUrl?: string;
  imageHint?: string;
};

export type CoralReef = {
  id: string;
  name: string;
  region: 'Andaman & Nicobar' | 'Gulf of Kutch' | 'Gulf of Mannar' | 'Lakshadweep';
  type: 'point' | 'polygon';
  coordinates: ReefPoint | ReefPolygon;
  health: 'Healthy' | 'Warning' | 'Alert';
  dominantSpecies: string[];
  lastSurvey: string;
  submissions: ReefSubmission[];
};

export const coralReefData: CoralReef[] = [
  {
    id: 'reef-001',
    name: 'North Button Island National Park',
    region: 'Andaman & Nicobar',
    type: 'polygon',
    coordinates: [
        { lat: 12.22, lng: 93.06 },
        { lat: 12.23, lng: 93.07 },
        { lat: 12.22, lng: 93.08 },
        { lat: 12.21, lng: 93.07 },
    ],
    health: 'Healthy',
    dominantSpecies: ['Acropora', 'Pocillopora'],
    lastSurvey: '2023-05-20',
    submissions: [
      { id: 'sub-01', submittedBy: 'Dr. Rina Sharma', date: '2023-05-20', notes: 'Vibrant coral growth observed.', imageUrl: 'https://picsum.photos/seed/reef-1/600/400', imageHint: 'healthy coral' },
      { id: 'sub-02', submittedBy: 'Oceanographic Institute', date: '2022-11-10', notes: 'Minor bleaching on the western edge.', imageUrl: 'https://picsum.photos/seed/reef-2/600/400', imageHint: 'coral bleaching' },
    ],
  },
  {
    id: 'reef-002',
    name: 'Pirotan Island Marine National Park',
    region: 'Gulf of Kutch',
    type: 'point',
    coordinates: { lat: 22.60, lng: 70.05 },
    health: 'Warning',
    dominantSpecies: ['Favia', 'Porites'],
    lastSurvey: '2023-09-12',
    submissions: [
      { id: 'sub-03', submittedBy: 'Gujarat FD', date: '2023-09-12', notes: 'Increased sedimentation observed. Some stress on corals.', imageUrl: 'https://picsum.photos/seed/reef-3/600/400', imageHint: 'sediment coral' },
    ],
  },
  {
    id: 'reef-003',
    name: 'Vaan Island',
    region: 'Gulf of Mannar',
    type: 'point',
    coordinates: { lat: 8.83, lng: 78.20 },
    health: 'Alert',
    dominantSpecies: ['Montipora', 'Turbinaria'],
    lastSurvey: '2024-01-30',
    submissions: [
      { id: 'sub-04', submittedBy: 'TNC India', date: '2024-01-30', notes: 'Significant bleaching event in progress. Urgent action needed.', imageUrl: 'https://picsum.photos/seed/reef-4/600/400', imageHint: 'severe coral bleaching' },
    ],
  },
  {
    id: 'reef-004',
    name: 'Agatti Atoll',
    region: 'Lakshadweep',
    type: 'polygon',
    coordinates: [
        { lat: 10.85, lng: 72.17 },
        { lat: 10.87, lng: 72.20 },
        { lat: 10.84, lng: 72.21 },
        { lat: 10.82, lng: 72.18 },
    ],
    health: 'Healthy',
    dominantSpecies: ['Diploastrea', 'Goniastrea'],
    lastSurvey: '2023-12-05',
    submissions: [
        { id: 'sub-05', submittedBy: 'Lakshadweep Fisheries', date: '2023-12-05', notes: 'Excellent fish diversity and coral cover.', imageUrl: 'https://picsum.photos/seed/reef-5/600/400', imageHint: 'coral reef fish' },
    ],
  },
];
