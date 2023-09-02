import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/components/navigation/AuthNavigation";
import DashNavigation from "./src/components/navigation/DashNavigation";

export default function App() {
  return (
    <NavigationContainer>
      {true ? <DashNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
