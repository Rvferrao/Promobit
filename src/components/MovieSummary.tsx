import { MovieDetail } from "../types/movieDetail";
import { ChartRating } from "./ChartRating";

type MovieSummaryProps = MovieDetail;

export const MovieSummary = ({
  release_dates,
  credits,
  overview,
  original_title,
  release_date,
  poster_path,
  genres,
  vote_average,
  runtime,
  title,
}: MovieSummaryProps) => {
  const formatHour = (hour: number) => {
    const minutes = hour;
    const hours = Math.floor(minutes / 60);
    const minutesLeft = Math.floor(minutes % 60);
    const formatHour = `${hours}h${minutesLeft}m`;

    return formatHour;
  };

  const brRating =
    release_dates?.results.filter((result) => result.iso_3166_1 === "BR")[0]
      ?.release_dates?.[0]?.certification ?? "";

  return (
    <section className="w-full flex px-4 bg-purple-dark py-8 lg:py-0 justify-center lg:max-h-[600px] h-fit lg:h-screen">
      <div className="flex lg:relative flex-col lg:flex-row items-center lg:items-end justify-between gap-8 max-w-[1280px] w-fit h-full">
        <div className="h-[279px] lg:h-[574px] drop-shadow-movie-poster lg:bottom-[-62px] w-[383px]">
          <div className="lg:absolute flex justify-center lg:block h-[279px] lg:h-[574px] drop-shadow-movie-poster lg:bottom-[-62px] w-[383px]">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={original_title}
              className="rounded-lg h-[279px] lg:h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col lg:h-[86%]">
          <div className="flex flex-col gap-2">
            <h2 className="font-Roboto text-xl lg:text-[32px] text-white leading-[38px] font-bold tracking-[-0.5%]">
              {title}
            </h2>
            <div className="flex gap-2 flex-wrap items-center font-Roboto text-base lg:text-lg font-normal text-white ">
              {!!brRating && <span>{brRating} anos</span>}•
              <span>
                {new Date(release_date).toLocaleString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}{" "}
                (BR)
              </span>
              •
              <div className="flex gap-1 items-center">
                {genres?.map?.((genre) => (
                  <span key={genre.id}>{genre?.name},</span>
                ))}
              </div>
              •<span>{formatHour(runtime)}</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <ChartRating vote_average={vote_average} />
            <p className="text-white font-normal text-base max-w-[120px] font-Roboto">
              Avaliação dos usuários
            </p>
          </div>
          <div className="flex flex-col gap-2 max-w-[696px] w-full">
            <h5 className="text-white font-bold text-base lg:text-xl font-Roboto">
              Sinopse
            </h5>
            <p className="text-[#DDDDDD] font-normal text-sm lg:text-base tracking-[-0.5%]">
              {overview}
            </p>
          </div>
          <div className="flex gap-8 mt-6 flex-wrap max-w-[696px] w-full">
            {credits?.crew.slice(0, 5).map((credit) => (
              <div key={credit.id} className="flex flex-col gap-1">
                <h3 className="text-white font-bold font-Roboto text-base">
                  {credit.name}
                </h3>
                <p className="text-[#FFFFFF] text-sm font-normal font-Roboto">
                  {credit.department}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
