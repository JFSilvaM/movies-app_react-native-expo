import MovieCast from "@/components/movie/movie-cast";
import MovieDescription from "@/components/movie/movie-description";
import MovieHeader from "@/components/movie/movie-header";
import { useMovie } from "@/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, castQuery } = useMovie(+id);

  return movieQuery.isLoading || !movieQuery.data ? (
    <View className="flex flex-1 items-center justify-center gap-4">
      <Text>Espere por favor</Text>

      <ActivityIndicator color="purple" size={30} />
    </View>
  ) : (
    <ScrollView>
      <MovieHeader
        poster={movieQuery.data.poster}
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
      />

      <MovieDescription movie={movieQuery.data} />

      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  );
};

export default MovieScreen;
