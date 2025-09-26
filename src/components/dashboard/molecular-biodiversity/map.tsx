"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { LocationData } from '@/lib/molecular-data';

// Fix for default icon not showing
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const activeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const defaultIcon = new L.Icon.Default();


interface MapUpdaterProps {
  location: LocationData | null;
}

const MapUpdater = ({ location }: MapUpdaterProps) => {
  const map = useMap();
  if (location) {
    map.flyTo([location.lat, location.lon], 8);
  }
  return null;
}


interface MapProps {
  locations: LocationData[];
  onSelectLocation: (location: LocationData) => void;
  selectedLocation: LocationData | null;
}

export function Map({ locations, onSelectLocation, selectedLocation }: MapProps) {
  const center: L.LatLngExpression = selectedLocation 
    ? [selectedLocation.lat, selectedLocation.lon] 
    : [15, 85]; // Default center of India

  return (
    <MapContainer center={center} zoom={5} scrollWheelZoom={false} className="h-full w-full rounded-lg">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map(loc => (
        <Marker 
            key={loc.id} 
            position={[loc.lat, loc.lon]} 
            eventHandlers={{ click: () => onSelectLocation(loc) }}
            icon={selectedLocation?.id === loc.id ? activeIcon : defaultIcon}
        >
          <Popup>
            {loc.name}
          </Popup>
        </Marker>
      ))}
      <MapUpdater location={selectedLocation} />
    </MapContainer>
  );
}
