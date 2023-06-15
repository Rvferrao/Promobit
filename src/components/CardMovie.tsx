import { Link } from "react-router-dom";
import { Movie } from "../hooks/useMovies";

type CardMovieProps = Omit<Movie, "genre_ids" | "original_title">;

export const CardMovie = ({
  poster_path,
  release_date,
  title,
  id,
}: CardMovieProps) => {
  const format = (date: string) => {
    const split = /\.?\s?de\s/g;
    const formattedDate = new Date(date)
      .toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .split(split)
      .join(" ")
      .toUpperCase();
    return formattedDate;
  };

  return (
    <div className="flex flex-col mt-4 max-w-[156px] w-full h-[320px] pt-2">
      <Link to={`/${id}`}>
        <div className="max-w-[156px] w-full">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt="nome"
            className="w-full h-[264px] rounded"
          />
        </div>
        <h6 className="text-black font-bold text-base font-Roboto">{title}</h6>
        <p className="text-gray-light text-sm font-Roboto font-bold">
          {format(release_date)}
        </p>
      </Link>
    </div>
  );
};

export default CardMovie;
