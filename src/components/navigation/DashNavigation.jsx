import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../../screens/DashboardScreen";
import Icon from "react-native-vector-icons/Entypo";

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        customAnimationOnGesture: true,
        animation: "slide_from_right",
        headerRight: () => (
          <Icon
            name="menu"
            size={40}
            color="black"
            onPress={() => {
              console.log("na press kol");
            }}
          />
        ),
      }}
    >
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
