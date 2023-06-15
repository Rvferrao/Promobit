import { Suspense } from "react";
import { useMovies } from "../hooks/useMovies";
import CardMovie from "./CardMovie";

export const Movies = () => {
  const { movies, changePage } = useMovies();

  return (
    <section className="flex flex-col pb-8 gap-20">
      <div className="grid grid-cols-2 px-4 lg:px-0 lg:grid-cols-6 pt-[40px] max-w-[1280px] m-auto gap-12">
        {movies?.map((movie) => {
          return (
            <Suspense
              key={movie.id}
              fallback={<p className="text-6xl text-yellow-700">Loading...</p>}
            >
              <CardMovie {...movie} />
            </Suspense>
          );
        })}
      </div>
      <section className="w-full flex justify-center">
        <div className="flex gap-6 w-full justify-center max-w-[1280px]">
          {[1, 2, 3, 4, 5].map((page) => (
            <span
              onClick={() => {
                changePage(page),
                  window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
              }}
              className="text-purple-dark cursor-pointer font-Roboto text-base font-bold"
            >
              {page}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
};
