import { Filters } from "./Filters";

export const Hero = () => {
  return (
    <section className="bg-purple-dark px-4 py-10 lg:py-0 lg:px-0 h-fit lg:max-h-[449px] lg:h-screen flex flex-col gap-10 items-center justify-center">
      <h1 className="lg:text-5xl font-bold text-[24px] text-left lg:text-center font-Roboto text-white max-w-[781px] w-full">
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </h1>
      <div className="flex flex-col px-4 lg:px-0 items-start lg:items-center gap-4">
        <span className="uppercase pl-5 lg:pl-0 font-bold lg:text-sm text-white">
          filtre por:
        </span>
        <Filters />
      </div>
    </section>
  );
};
