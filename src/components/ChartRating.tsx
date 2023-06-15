import { MovieDetail } from "../types/movieDetail";

type ChartRatingProps = Pick<MovieDetail, "vote_average">;

export const ChartRating = (props: ChartRatingProps) => {
  const percent = new Intl.NumberFormat("en-US", {
    style: "percent",
  }).format(props.vote_average / 10);

  return (
    <div className="flex items-center relative w-fit justify-center">
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" className="bg" />
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="100"
          className="indicator"
          style={{
            strokeDasharray: 100,
            strokeDashoffset: 100 - (props.vote_average * 100) / 10,
          }}
        />
      </svg>
      <span className="absolute font-Roboto font-bold text-base tracking-[-0.5%] text-[#14FF00]">
        {percent}
      </span>
    </div>
  );
};
