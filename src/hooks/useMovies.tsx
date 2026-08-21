import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    queryFn: nowPlayingAction,
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    queryFn: popularMoviesAction,
  });

  return { nowPlayingQuery, popularQuery };
};
