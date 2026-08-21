import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./movie-poster";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({
  title,
  movies,
  className,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    loadNextPage && loadNextPage();
  };

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        keyExtractor={(item, i) => `${item.id}-${i}`}
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
