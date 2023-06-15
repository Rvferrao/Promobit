import { useGenres } from "../hooks/useFilters";
import { FilterItem } from "./FilterItem";
export type GenreOptions =
  | "Ação"
  | "Aventura"
  | "Animação"
  | "Comédia"
  | "Crime"
  | "Documentário"
  | "Drama"
  | "Família"
  | "Fantasia"
  | "História"
  | "Terror"
  | "Música"
  | "Mistério"
  | "Romance"
  | "Ficção científica"
  | "Cinema TV"
  | "Thriller"
  | "Guerra"
  | "Faroeste";

export interface Genre {
  id: number;
  name: GenreOptions;
}

export const Filters = () => {
  const { genres } = useGenres();

  return (
    <div className="w-screen px-4 lg:px-0 max-w-[1110px]">
      <div className="flex gap-3 lg:justify-center flex-wrap">
        {genres.map((genre) => (
          <FilterItem key={genre.id} filterName={genre.name} id={genre.id} />
        ))}
      </div>
    </div>
  );
};
