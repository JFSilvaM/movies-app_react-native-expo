import MainSlideshow from "@/components/movies/main-slideshow";
import MovieHorizontalList from "@/components/movies/movie-horizontal-list";
import { useMovies } from "@/hooks/useMovies";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();
  const safeArea = useSafeAreaInsets();

  return nowPlayingQuery.isLoading ? (
    <View className="justify-center items-center flex-1">
      <ActivityIndicator color="purple" size={40} />
    </View>
  ) : (
    <ScrollView>
      <View
        style={{ paddingTop: safeArea.top, paddingBottom: safeArea.bottom }}
      >
        <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>

        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        <MovieHorizontalList
          title="Popular"
          movies={popularQuery.data ?? []}
          className="mb-5"
        />

        <MovieHorizontalList
          title="Mejor Calificadas"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          loadNextPage={topRatedQuery.fetchNextPage}
          className="mb-5"
        />

        <MovieHorizontalList
          title="Próximamente"
          movies={upcomingQuery.data ?? []}
          className="mb-5"
        />

        <MovieHorizontalList movies={upcomingQuery.data ?? []} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
