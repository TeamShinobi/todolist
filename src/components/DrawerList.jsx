import * as React from "react";
import { View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/Octicons";
import Icon3 from "react-native-vector-icons/Entypo";
import Icon4 from "react-native-vector-icons/Feather";
import Icon5 from "react-native-vector-icons/MaterialIcons";

const DrawerList = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
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
        icon={Task}
        onPress={() => {
          navigation.navigate("ToDo List");
        }}
      />

      <DrawerItem
        label="Task completed"
        icon={Complete}
        onPress={() => {
          navigation.navigate("Task Completed");
        }}
      />
      <DrawerItem label="About" icon={About} onPress={() => {}} />
      <DrawerItem label="Settings" icon={Settings} onPress={() => {}} />

      <DrawerItem label="Sign Out" icon={SignOut} onPress={() => {}} />
    </DrawerContentScrollView>
  );
};

export default DrawerList;

const Task = () => <Icon1 name="tasks" size={20} />;
const Complete = () => <Icon2 name="tasklist" size={20} />;
const About = () => <Icon3 name="info-with-circle" size={20} />;
const Settings = () => <Icon4 name="settings" size={20} />;
const SignOut = () => <Icon5 name="logout" size={20} />;
