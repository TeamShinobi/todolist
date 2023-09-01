import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import SignupScreen from "../../screens/SignupScreen";

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          customAnimationOnGesture: true,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          customAnimationOnGesture: true,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
