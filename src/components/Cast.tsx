import type { Cast as CastType } from "../types/movieDetail";

interface CastProps {
  cast: CastType[];
}

export const Cast = ({ cast }: CastProps) => {
  return (
    <section className="flex max-w-[1280px] flex-col w-full">
      <h2 className="text-[#131313] ml-8 font-Roboto font-bold text-xl lg:text-[28px]">
        Elenco original
      </h2>
      <section className="flex flex-col gap-8 py-6 px-7 w-full overflow-auto">
        <div className="flex gap-4">
          {cast?.map((cast) => (
            <div className="flex flex-col shadow-profile gap-4 bg-white rounded p-2 max-w-[191px] w-full h-[336px]">
              <div className="flex flex-col h-fit w-[175px]">
                <img
                  src={`https://image.tmdb.org/t/p/original/${cast?.profile_path}`}
                  className="rounded h-[222px] object-cover"
                  alt={cast?.name}
                />
              </div>
              <div>
                <h4 className="text-[#131313] font-bold text-lg font-Roboto">
                  {cast?.name}
                </h4>
                <p className="text-[#131313] font-normal text-base font-Roboto">
                  {cast?.character}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
