import React from "react";
import { View, Text } from "react-native";
import { typography } from "./src/utils/typography";

typography();

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>React Native</Text>
    </View>
  );
};
export default App;
