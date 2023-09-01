import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text as ErrorMessage,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex justify-center items-center bg-[#F8F6F6] h-[100vh]">
      <View className=" flex flex-col">
        <StatusBar style="black" backgroundColor="#F1EDED" />
        <View className="  min-w-[85%] p-4">
          <Text className="text-[32px] font-bold mb-10">Todo-List Sign in</Text>
          <TextInput
            className=" border-[1px] rounded-lg border-b-gray-950 h-[40px] p-2 mb-5"
            placeholder="Email address"
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

          <View className="flex flex-row justify-end">
            <TouchableOpacity
              className=" h-[40px] justify-center items-center flex w-[30%] rounded-xl mr-2 border-[2px] border-black"
              onPress={() => navigation.navigate("Signup")}
            >
              <Text className="text-black font-bold text-[16px]">SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-black h-[40px] justify-center items-center flex w-[25%] rounded-xl">
              <Text className="text-white font-bold text-[16px]">ENTER</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row mb-5 mt-[70px] justify-center">
            <Text>Forgot password?</Text>
            <TouchableOpacity>
              <Text className="text-blue-600"> Click here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
