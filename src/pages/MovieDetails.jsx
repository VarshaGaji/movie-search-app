import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../utils/api";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getMovieDetails(id);
      setMovie(data);
    }
    load();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <img src={movie.Poster} width="250" />
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <p>⭐ {movie.imdbRating}</p>
    </div>
  );
}