import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../../screens/DashboardScreen";

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: true,
          customAnimationOnGesture: true,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
