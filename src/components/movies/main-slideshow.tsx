import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Carousel } from "react-native-reanimated-carousel";
import MoviePoster from "./movie-poster";

interface Props {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <GestureHandlerRootView style={{ width, height: 250 }}>
      <Carousel
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} />
        )}
        style={{ width, height: 250 }}
        layout={{
          type: "parallax",
          scale: 0.9,
          offset: 50,
        }}
        itemSize={200}
        defaultIndex={1}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        loop
      />
    </GestureHandlerRootView>
  );
};

export default MainSlideshow;
