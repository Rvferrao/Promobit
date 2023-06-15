import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieDetail } from "../types/movieDetail";

export const useDetailMovie = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<MovieDetail>({} as MovieDetail);

  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${"cdf364544e455367beef67c96f83abf8"}&language=pt-BR&append_to_response=videos,images,release_dates,credits,recommendations`
      );

      const data: MovieDetail = await response.json();

      console.log(data, "dadosss");

      setDetail(data);
    };

    getDetails();
  }, [id]);

  return {
    detail,
  };
};
