import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { mapMovie } from "@/infrastructure/mappers/movie.mapper";

export const popularMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/popular");

    const movies = data.results.map(mapMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load popular movies";
  }
};
