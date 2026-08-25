import { movieApi } from "@/core/api/movie-api";
import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.response";
import { mapCast } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`,
    );

    return data.cast.map(mapCast);
  } catch (error) {
    console.log(error);
    throw "Cannot load movie cast";
  }
};
