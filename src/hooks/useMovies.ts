import { useEffect, useState } from "react";
import { filterStore } from "../stores/filtersStore";
import { useRef } from "react";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [page, setPage] = useState<number>(1);
  const total_pages = useRef<number | undefined>();
  const { filters } = filterStore();

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${"cdf364544e455367beef67c96f83abf8"}&language=pt-BR&page=${page}`
      );
      const data: ResponseApi = await response.json();
      total_pages.current = data.total_pages;
      setMovies(data.results);
    };
    getMovies();
  }, [page]);

  const changePage = (page: number) => setPage(page);

  const getFilteredMovies = () => {
    if (!movies) {
      return [];
    }
    if (filters.length === 0) {
      return [...movies];
    }
    const filteredMovies = movies.filter(
      (movie) =>
        filters.filter((selectedFilter) =>
          movie.genre_ids.includes(selectedFilter.id)
        ).length > 0
    );
    return filteredMovies;
  };

  return {
    movies: getFilteredMovies(),
    changePage,
    total_pages,
  };
};

interface ResponseApi {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  poster_path: string;
  title: string;
  original_title: string;
  id: number;
  genre_ids: number[];
  release_date: string;
}
