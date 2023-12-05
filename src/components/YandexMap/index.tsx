"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import locations from '@/api-placeholder/locations.json';


type YandexMapProps = {
  locations: typeof locations;
};

export default function YandexMap({ locations }: YandexMapProps) {
  return (
    <YMaps>
      <div className="relative rounded overflow-hidden w-min">
        <div className="absolute inset-0 bg-gray-200  animate-pulse"></div>
        <Map width={720} height={600} defaultState={{ center: [56.010566, 92.852571], zoom: 11 }} modules={['geoObject.addon.balloon']} >
          {locations.map((l) => (
            <Placemark key={l.title}
              geometry={l.coordinates}
              options={{
                iconColor: "red"
              }}
              properties={{
                balloonContent: `<div class="p-2">
                <h4 class="font-bold">${l.title}</h4>
                <p class="mb-1">${l.address}</p>
                ${l.schedule.map(s => `<p class="text-xs">${s}</p>`).join("")}
              </div>`
              }}
            />)
          )}
        </Map>
      </div>
    </YMaps>
  );
}