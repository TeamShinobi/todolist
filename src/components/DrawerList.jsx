import * as React from "react";
import { View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

const DrawerList = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View>
        {/* <DrawerItem
          label="Profile"
          // icon={Profile}
          onPress={() => {
            navigation.navigate("ProfileScreen");
          }}
        />
        <View
          style={{
            width: "100%",
            height: "2%",
            backgroundColor: "black",
          }}
        /> */}

        <DrawerItem
          label="Todo List"
          onPress={() => {
            navigation.navigate("ToDo List");
          }}
        />

        <DrawerItem
          label="Task completed"
          onPress={() => {
            navigation.navigate("ProfileScreen");
          }}
        />
        <DrawerItem
          label="About"
          // icon={SignOut}
          onPress={() => {}}
        />
        <DrawerItem
          label="Settings"
          // icon={SignOut}
          onPress={() => {}}
        />

        <DrawerItem
          label="Sign Out"
          // icon={SignOut}
          onPress={() => {}}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerList;
