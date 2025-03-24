import React from "react";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
