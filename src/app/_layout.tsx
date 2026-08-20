import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { Text, View } from "react-native";

import "../global.css";

const RootLayout = () => {
  nowPlayingAction();

  return (
    <View>
      <Text className="text-3xl text-blue-500">RootLayout</Text>
    </View>
  );
};

export default RootLayout;
