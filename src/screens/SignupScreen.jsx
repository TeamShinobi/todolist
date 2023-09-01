import * as React from "react";
import { createRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text as ErrorMessage,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex justify-center items-center bg-[#F8F6F6] h-[100vh]">
      <View className=" flex flex-col">
        <StatusBar style="black" backgroundColor="#F1EDED" />
        <View className="min-w-[85%] p-4 h-[80%] mt-10 ">
          <Text className="text-[32px] font-bold mb-10">Todo-List Sign up</Text>

          <KeyboardAwareScrollView
            className=""
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
            extraHeight={50} // Optional: Add extra height to account for the keyboard
            scrollEnabled={true}
          >
            <TextInput
              className=" border-[1px] rounded-lg border-b-gray-950 h-[40px] p-2 mb-5"
              placeholder="First Name"
              type="text"
              value={undefined}
              onChangeText={undefined}
            />
            <TextInput
              className=" border-[1px] rounded-lg border-b-gray-950 h-[40px] p-2 mb-5"
              placeholder="Last Name"
              type="text"
              value={undefined}
              onChangeText={undefined}
            />
            <TextInput
              className=" border-[1px] rounded-lg border-b-gray-950 h-[40px] p-2 mb-5"
              placeholder="Username"
              type="text"
              value={undefined}
              onChangeText={undefined}
            />
            <TextInput
              className=" border-[1px] rounded-lg border-b-gray-950 h-[40px] p-2 mb-5"
              placeholder="Email"
              type="email"
              value={undefined}
              onChangeText={undefined}
            />
            <TextInput
              className=" border-[1px] rounded-lg h-[40px] p-2 mb-7"
              placeholder="Password"
              secureTextEntry={true}
              type="password"
              value={undefined}
              onChangeText={undefined}
            />
          </KeyboardAwareScrollView>
          <View className="flex flex-row justify-end">
            <TouchableOpacity
              className=" h-[40px] justify-center items-center flex w-[30%] rounded-xl mr-2 border-[2px] border-black"
              onPress={() => navigation.navigate("Home")}
            >
              <Text className="text-black font-bold text-[16px]">SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-black h-[40px] justify-center items-center flex w-[25%] rounded-xl">
              <Text className="text-white font-bold text-[16px]">CREATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
