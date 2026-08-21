import MainSlideshow from "@/components/movies/main-slideshow";
import { useMovies } from "@/hooks/useMovies";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();

  return nowPlayingQuery.isLoading ? (
    <View className="justify-center items-center flex-1">
      <ActivityIndicator color="purple" size={40} />
    </View>
  ) : (
    <View style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>

      <MainSlideshow movies={nowPlayingQuery.data ?? []} />
    </View>
  );
};

export default HomeScreen;
