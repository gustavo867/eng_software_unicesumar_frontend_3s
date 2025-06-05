import { useEffect, useState } from "react";
import "../../styles/Card.css";
import api from "../../services/api";

interface BerryCardProps {
  name: string;
}

interface GetBerryResult {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: Firmness;
  flavors: Flavor[];
  item: Firmness;
  natural_gift_type: Firmness;
}

interface Firmness {
  name: string;
  url: string;
}

interface Flavor {
  potency: number;
  flavor: Firmness;
}

export default function BerryCard({ name }: BerryCardProps) {
  const [berry, setBerry] = useState<GetBerryResult | null>(null);

  useEffect(() => {
    api.get<GetBerryResult>(`/berry/${name}`).then((res) => {
      setBerry(res.data);
    });
  }, [name]);

  return (
    <>
      <div className="card">
        {!berry ? (
          <span>Carregando</span>
        ) : (
          <>
            <h2>
              {berry.id} - {berry.name}
            </h2>
            <h3>Informações:</h3>
            <ul>
              <li>Tamanho: {berry.size}mm</li>
              <li>
                Tempo para crescer: {berry.growth_time}{" "}
                {berry.growth_time === 1 ? "hora" : "horas"}
              </li>
            </ul>

            <h3>Sabores: </h3>
            <ul>
              {berry.flavors.map((flavor) => (
                <li key={flavor.flavor.name}>{flavor.flavor.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
