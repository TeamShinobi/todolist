import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() => navigateToScreen("Profile")}
        style={{ marginVertical: 10 }}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Settings")}
        style={{ marginVertical: 10 }}
      >
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("TaskHistory")}
        style={{ marginVertical: 10 }}
      >
        <Text>Task History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("About")}
        style={{ marginVertical: 10 }}
      >
        <Text>About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuScreen;
