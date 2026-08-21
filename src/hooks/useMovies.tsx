import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "top-rated"],
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    queryFn: ({ pageParam }) => topRatedMoviesAction({ page: pageParam }),
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    queryFn: upcomingMoviesAction,
  });

  return { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery };
};
