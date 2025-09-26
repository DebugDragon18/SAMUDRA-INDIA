"use client";

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useRef } from 'react';
import type { Map as LeafletMap } from 'leaflet';
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

interface MapProps {
  locations: LocationData[];
  onSelectLocation: (location: LocationData) => void;
  selectedLocation: LocationData | null;
}

export function Map({ locations, onSelectLocation, selectedLocation }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (mapRef.current && !leafletMapRef.current) {
        const center: L.LatLngExpression = selectedLocation
            ? [selectedLocation.lat, selectedLocation.lon]
            : [15, 85];
        
        leafletMapRef.current = L.map(mapRef.current).setView(center, 5);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(leafletMapRef.current);
    }
  }, []); // Run only once

  useEffect(() => {
      if (leafletMapRef.current) {
        // Clear existing markers
        markersRef.current.forEach(marker => marker.remove());
        markersRef.current = [];

        // Add new markers
        locations.forEach(loc => {
            const marker = L.marker([loc.lat, loc.lon], {
                icon: selectedLocation?.id === loc.id ? activeIcon : defaultIcon
            })
            .addTo(leafletMapRef.current!)
            .bindPopup(loc.name)
            .on('click', () => onSelectLocation(loc));

            markersRef.current.push(marker);
        });
      }
  }, [locations, selectedLocation, onSelectLocation]);

  useEffect(() => {
    if (leafletMapRef.current && selectedLocation) {
        leafletMapRef.current.flyTo([selectedLocation.lat, selectedLocation.lon], 8);
    }
  }, [selectedLocation]);


  return <div ref={mapRef} className="h-full w-full rounded-lg" />;
}
