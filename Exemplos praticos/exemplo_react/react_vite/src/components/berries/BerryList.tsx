import { useEffect, useState } from "react";
import api from "../../services/api";
import LocationCard from "./BerryCard";
import "../../styles/List.css";
import Pagination from "../utils/Pagination";
import BerryCard from "./BerryCard";

interface BerryResults {
  count: number;
  next: string;
  previous: null;
  results: Berry[];
}

interface Berry {
  name: string;
  url: string;
}

export default function BerryList() {
  const [berries, setBerries] = useState<Berry[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const limit = 20;

  useEffect(() => {
    api
      .get<BerryResults>(`/berry?limit=${limit}&offset=${page * limit}`)
      .then((res) => {
        setBerries(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar os locais:", err);
        setLoading(false);
      });
  }, [page]);

  if (loading) {
    return (
      <>
        <span>Carregando .. </span>
      </>
    );
  }

  return (
    <>
      <Pagination setPage={setPage} page={page} />

      <div className="list">
        {berries.map((berry) => (
          <div key={berry.name}>
            <BerryCard name={berry.name} />
          </div>
        ))}
      </div>
    </>
  );
}
