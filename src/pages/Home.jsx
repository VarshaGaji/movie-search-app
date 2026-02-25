import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../utils/api";
import useDebounce from "../hooks/useDebounce";

export default function Home() {
  const [query, setQuery] = useState("batman");
  const [movies, setMovies] = useState([]);

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    async function load() {
      if (!debouncedQuery) return;
      const data = await searchMovies(debouncedQuery);
      setMovies(data.Search || []);
    }
    load();
  }, [debouncedQuery]);

  return (
    <div style={{ padding: 20 }}>
      <SearchBar value={query} onChange={setQuery} />

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {movies.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>
    </div>
  );
}