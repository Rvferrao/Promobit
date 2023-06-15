import { useEffect, useState } from "react";
import { Genre } from "../components/Filters";
export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([] as Genre[]);
  useEffect(() => {
    const getGenres = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${"cdf364544e455367beef67c96f83abf8"}&language=pt-Br`
      );
      const { genres }: GenreResponse = await response.json();
      setGenres(genres);
    };

    getGenres();
  }, []);

  return {
    genres,
  };
};

interface GenreResponse {
  genres: Genre[];
}
