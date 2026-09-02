"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import type { Feature, Geometry } from "geojson";
import type { Layer, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import coverageCounties from "@/lib/data/coverage-counties.geojson.json";

interface CountyProps {
  unit: string;
  county: string;
}

const data = coverageCounties as GeoJSON.FeatureCollection<Geometry, CountyProps>;

// Boundary source: ONS Open Geography Portal, Counties and Unitary Authorities
// (December 2024) Boundaries UK BUC — contains OS & ONS Intellectual Property
// Rights (Open Government Licence). Ceremonial counties are represented as the
// union of their current administrative units (e.g. Bedfordshire = Bedford +
// Central Bedfordshire + Luton).

type NestedCoords = number | NestedCoords[];

function computeBounds(): LatLngBoundsExpression {
  let minLat = Infinity, minLng = Infinity, maxLat = -Infinity, maxLng = -Infinity;
  const walk = (coords: NestedCoords[]): void => {
    if (typeof coords[0] === "number") {
      const [lng, lat] = coords as number[];
      minLat = Math.min(minLat, lat);
      maxLat = Math.max(maxLat, lat);
      minLng = Math.min(minLng, lng);
      maxLng = Math.max(maxLng, lng);
    } else {
      (coords as NestedCoords[][]).forEach(walk);
    }
  };
  data.features.forEach((f) => {
    if ("coordinates" in f.geometry) walk(f.geometry.coordinates as NestedCoords[]);
  });
  return [
    [minLat, minLng],
    [maxLat, maxLng],
  ] as [LatLngTuple, LatLngTuple];
}

function onEachFeature(feature: Feature<Geometry, CountyProps>, layer: Layer) {
  layer.bindTooltip(feature.properties.county, { sticky: true });
}

export default function CountyMap() {
  return (
    <MapContainer
      bounds={computeBounds()}
      boundsOptions={{ padding: [20, 20] }}
      scrollWheelZoom={false}
      className="h-96 w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        data={data}
        style={{ color: "#0f766e", weight: 1.5, fillColor: "#14b8a6", fillOpacity: 0.35 }}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
}
