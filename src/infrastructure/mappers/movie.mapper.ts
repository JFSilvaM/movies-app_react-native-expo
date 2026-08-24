import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MovieDBMovieResponse } from "../interfaces/moviedb-movie.response";
import { Result } from "../interfaces/moviedb-response";

export const mapMovie = (movie: Result): Movie => ({
  id: movie.id,
  title: movie.title,
  description: movie.overview,
  releaseDate: new Date(movie.release_date),
  rating: movie.vote_average,
  poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
});

export const mapCompleteMovie = (
  movie: MovieDBMovieResponse,
): CompleteMovie => ({
  id: movie.id,
  title: movie.title,
  description: movie.overview,
  releaseDate: new Date(movie.release_date),
  rating: movie.vote_average,
  poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
  budget: movie.budget,
  duration: movie.runtime,
  genres: movie.genres.map((g) => g.name),
  originalTitle: movie.original_title,
  productionCompanies: movie.production_companies.map((c) => c.name),
});
