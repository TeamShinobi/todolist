import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../../screens/DashboardScreen";
import Icon from "react-native-vector-icons/Ionicons";
import ProfileScreen from "../../screens/ProfileScreen";
import DrawerList from "../DrawerList";

const DashNavigation = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        swipeEnabled: false,
        swipeEdgeWidth: 150,
        drawerPosition: "right",
      }}
      initialRouteName="Dashboard"
      drawerContent={DrawerList}
    >
      <Drawer.Screen name="ToDo List" component={DashboardScreen} />
      <Drawer.Screen name="Task Completed" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DashNavigation;
