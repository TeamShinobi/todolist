import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
const DashboardScreen = () => {
  return (
    <SafeAreaView className="flex  h-[100vh]">
      <StatusBar style="black" backgroundColor="#F1EDED" />
      {/* <View
        className=" bg-white flex flex-col h-[70px]"
        style={{
          elevation: 5,
          shadowOffset: { width: 5, height: 10 },
          shadowOpacity: 0.5,
        }}
      >
        <Text className="text-[24px] font-bold mt-8 ml-4 ">Todo List</Text>
      </View> */}

      <View className=" flex justify-center items-center flex-col p-4">
        <View className="bg-blue-300 w-[90%] rounded-lg p-4 m-2">
          <View className="flex flex-row justify-between">
            <Text className="text-white font-bold text-[18px]">
              Task title 01
            </Text>
            <TouchableOpacity>
              <Text>button</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-green-400 w-[90%] rounded-lg p-4 m-2">
          <Text className="text-white font-bold text-[18px]">
            Task title 02
          </Text>
        </View>

        <View className="bg-red-400 w-[90%] rounded-lg p-4 m-2">
          <Text className="text-white font-bold text-[18px]">
            Task title 03
          </Text>
        </View>

        <View className="bg-yellow-400 w-[90%] rounded-lg p-4 m-2">
          <Text className="text-white font-bold text-[18px]">
            Task title 04
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
