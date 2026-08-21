import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { mapMovie } from "@/infrastructure/mappers/movie.mapper";

export const upcomingMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/upcoming");

    const movies = data.results.map(mapMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load upcoming movies";
  }
};
