import YandexMap from "@/components/YandexMap";
import locations from "@/api-placeholder/locations.json";

type Props = {};

export default function page({ }: Props) {
  return (
    <main className="px-2main-layout mt-8 mb-16">
      <h1 className="mb-4 text-xl font-semibold">Местоположения магазинов</h1>
      <div className="flex gap-8">
        <YandexMap locations={locations} />
        <ul className="flex flex-col gap-y-4 gap-x-8">
          {locations.map(l => (
            <li key={l.title}>
              <p className="font-bold">{l.title}</p>
              <p className="text-sm">{l.address}</p>
              {l.schedule.map(s => (
                <p className="text-sm">{s}</p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}