import { useDetailMovie } from "../../hooks/useDetailMovie";
import CardMovie from "../CardMovie";
import { Cast } from "../Cast";
import { Header } from "../Header";
import { MovieSummary } from "../MovieSummary";
import { useEffect } from "react";
import { useLocation } from "react-router";

export const MovieDetail = () => {
  const { detail } = useDetailMovie();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <section className="flex flex-col pb-28 items-center">
      <Header />
      <MovieSummary {...detail} />
      <section className="pt-[74px] flex justify-center w-full">
        <Cast cast={detail.credits?.cast} />
      </section>
      <section className="flex px-4 items-start max-w-[1280px] mt-8 w-full justify-center flex-col gap-6">
        <h2 className="text-[#131313] font-Roboto font-bold text-xl lg:text-[28px] leading-[20px]">
          Trailer
        </h2>
        <iframe
          className="max-w-[907px] h-[510px] w-full"
          src={`https://www.youtube.com/embed/${detail?.videos?.results[0]?.key}`}
          title={detail?.videos?.results[0]?.name}
        ></iframe>
      </section>
      <section className="flex px-4 mt-16 flex-col gap-6 items-start justify-center max-w-[1280px] w-full">
        <h2 className="text-[#131313] font-Roboto font-bold text-xl lg:text-[28px] leading-[32px]">
          Recomendações
        </h2>
        <div className="flex justify-center flex-wrap gap-8">
          {detail?.recommendations?.results
            .slice(0, 5)
            ?.map((recommendation) => (
              <CardMovie {...recommendation} />
            ))}
        </div>
      </section>
    </section>
  );
};
