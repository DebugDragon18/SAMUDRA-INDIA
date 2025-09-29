"use client";

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useRef } from 'react';
import type { Map as LeafletMap } from 'leaflet';
import { CoralReef, ReefPoint } from '@/lib/coral-reef-data';

// Fix for default icon not showing
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const healthColorMap = {
    Healthy: '#22c55e', // green-500
    Warning: '#f59e0b', // amber-500
    Alert: '#ef4444',   // red-500
};

interface MapProps {
  reefs: CoralReef[];
  onSelectReef: (reef: CoralReef) => void;
  selectedReef: CoralReef | null;
}

export function Map({ reefs, onSelectReef, selectedReef }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<LeafletMap | null>(null);
  const layersRef = useRef<L.Layer[]>([]);

  useEffect(() => {
    if (mapRef.current && !leafletMapRef.current) {
        const center: L.LatLngExpression = [12, 80];
        
        leafletMapRef.current = L.map(mapRef.current).setView(center, 5);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }).addTo(leafletMapRef.current);
    }
  }, []);

  useEffect(() => {
      if (leafletMapRef.current) {
        layersRef.current.forEach(layer => layer.remove());
        layersRef.current = [];

        reefs.forEach(reef => {
            const color = healthColorMap[reef.health];
            const isSelected = selectedReef?.id === reef.id;
            
            let layer: L.Layer;

            if (reef.type === 'point') {
                const coords = reef.coordinates as ReefPoint;
                layer = L.circleMarker([coords.lat, coords.lng], {
                    radius: isSelected ? 10 : 6,
                    color: color,
                    weight: isSelected ? 3 : 1,
                    fillColor: color,
                    fillOpacity: isSelected ? 0.7 : 0.5,
                }).addTo(leafletMapRef.current!);
            } else { // polygon
                const coords = reef.coordinates as ReefPoint[];
                layer = L.polygon(coords.map(p => [p.lat, p.lng]), {
                    color: color,
                    weight: isSelected ? 4 : 2,
                    fillColor: color,
                    fillOpacity: isSelected ? 0.4 : 0.2,
                }).addTo(leafletMapRef.current!);
            }
            
            layer.bindPopup(`<b>${reef.name}</b><br/>Health: ${reef.health}`);
            layer.on('click', () => onSelectReef(reef));
            layersRef.current.push(layer);
        });
      }
  }, [reefs, selectedReef, onSelectReef]);

  useEffect(() => {
    if (leafletMapRef.current && selectedReef) {
        let center;
        if (selectedReef.type === 'point') {
            const coords = selectedReef.coordinates as ReefPoint;
            center = [coords.lat, coords.lng];
        } else {
            const coords = selectedReef.coordinates as ReefPoint[];
            const bounds = L.latLngBounds(coords.map(p => [p.lat, p.lng]));
            center = bounds.getCenter();
        }
        leafletMapRef.current.flyTo(center, 8);
    }
  }, [selectedReef]);


  return <div ref={mapRef} className="h-full w-full rounded-lg" />;
}
