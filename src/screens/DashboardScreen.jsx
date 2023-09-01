import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const DashboardScreen = () => {
  const [showContent, setShowContent] = useState([
    { title: "Task title 01", showContent: false },
    { title: "Task title 02", showContent: false },
    { title: "Task title 03", showContent: false },
  ]);

  return (
    <>
      <SafeAreaView className="flex  h-[100vh]">
        <StatusBar style="black" backgroundColor="#F1EDED" />

        <TouchableOpacity
          className="absolute right-[20px] bottom-[100px] z-50 bg-black h-[60px] w-[60px]
        justify-center items-center rounded-[50px]"
        >
          <Icon name="plus" size={45} color="white" />
        </TouchableOpacity>

        <ScrollView className="mb-30" showsVerticalScrollIndicator={false}>
          <View className=" flex justify-center items-center flex-col p-4">
            <View className="bg-blue-400 w-[100%] rounded-lg p-4 m-2">
              <View className="flex flex-row justify-between">
                <Text className="text-white font-bold text-[18px]">
                  Task title 01
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setShowContent(!showContent);
                  }}
                >
                  {showContent ? (
                    <Icon name="chevron-thin-up" size={25} color="white" />
                  ) : (
                    <Icon name="chevron-thin-down" size={25} color="white" />
                  )}
                </TouchableOpacity>
              </View>

              <Text className="text-[14px] text-white">02/27/23</Text>

              <View>
                <Text
                  className={`text-[16px] p-2 text-white duration-500 ease-out-in ${
                    showContent ? undefined : "hidden"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  a gravida tellus. Pellentesque vulputate ipsum at dui sodales
                  pretium. Fusce eu elit pulvinar, aliquet nulla vitae,
                  fermentum nunc. Aenean ac tempor lectus. Donec eu maximus
                  nunc, et luctus mauris. In volutpat lorem eleifend magna
                  feugiat, molestie rhoncus sem tincidunt. Quisque est dolor,
                  faucibus ut volutpat consectetur, ultricies in dolor. Sed
                  lobortis metus non consectetur convallis. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Maecenas molestie ultrices tincidunt.
                </Text>
              </View>

              <TouchableOpacity className="bg-green-500 rounded-[50px] w-[40%] flex justify-center items-center mt-5 self-end">
                <Text className=" p-2 font-semibold text-white">
                  IN PROGRESS
                </Text>
              </TouchableOpacity>
            </View>

            <View className="bg-yellow-400 w-[100%] rounded-lg p-4 m-2">
              <View className="flex flex-row justify-between">
                <Text className="text-white font-bold text-[18px]">
                  Task title 01
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setShowContent(!showContent);
                  }}
                >
                  {showContent ? (
                    <Icon name="chevron-thin-up" size={25} color="white" />
                  ) : (
                    <Icon name="chevron-thin-down" size={25} color="white" />
                  )}
                </TouchableOpacity>
              </View>

              <Text className="text-[14px] text-white">02/27/23</Text>

              <View>
                <Text
                  className={`text-[16px] p-2 text-white duration-500 ease-out-in ${
                    showContent ? undefined : "hidden"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  a gravida tellus. Pellentesque vulputate ipsum at dui sodales
                  pretium. Fusce eu elit pulvinar, aliquet nulla vitae,
                  fermentum nunc. Aenean ac tempor lectus. Donec eu maximus
                  nunc, et luctus mauris. In volutpat lorem eleifend magna
                  feugiat, molestie rhoncus sem tincidunt. Quisque est dolor,
                  faucibus ut volutpat consectetur, ultricies in dolor. Sed
                  lobortis metus non consectetur convallis. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Maecenas molestie ultrices tincidunt.
                </Text>
              </View>

              <TouchableOpacity className="bg-green-500 rounded-[50px] w-[40%] flex justify-center items-center mt-5 self-end">
                <Text className=" p-2 font-semibold text-white">
                  IN PROGRESS
                </Text>
              </TouchableOpacity>
            </View>

            <View className="bg-red-400 w-[100%] rounded-lg p-4 m-2">
              <View className="flex flex-row justify-between">
                <Text className="text-white font-bold text-[18px]">
                  Task title 01
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setShowContent(!showContent);
                  }}
                >
                  {showContent ? (
                    <Icon name="chevron-thin-up" size={25} color="white" />
                  ) : (
                    <Icon name="chevron-thin-down" size={25} color="white" />
                  )}
                </TouchableOpacity>
              </View>

              <Text className="text-[14px] text-white">02/27/23</Text>

              <View>
                <Text
                  className={`text-[16px] p-2 text-white duration-500 ease-out-in ${
                    showContent ? undefined : "hidden"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  a gravida tellus. Pellentesque vulputate ipsum at dui sodales
                  pretium. Fusce eu elit pulvinar, aliquet nulla vitae,
                  fermentum nunc. Aenean ac tempor lectus. Donec eu maximus
                  nunc, et luctus mauris. In volutpat lorem eleifend magna
                  feugiat, molestie rhoncus sem tincidunt. Quisque est dolor,
                  faucibus ut volutpat consectetur, ultricies in dolor. Sed
                  lobortis metus non consectetur convallis. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Maecenas molestie ultrices tincidunt.
                </Text>
              </View>

              <TouchableOpacity className="bg-green-500 rounded-[50px] w-[40%] flex justify-center items-center mt-5 self-end">
                <Text className=" p-2 font-semibold text-white">
                  IN PROGRESS
                </Text>
              </TouchableOpacity>
            </View>

            <View className="bg-purple-400 w-[100%] rounded-lg p-4 m-2">
              <View className="flex flex-row justify-between">
                <Text className="text-white font-bold text-[18px]">
                  Task title 01
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setShowContent(!showContent);
                  }}
                >
                  {showContent ? (
                    <Icon name="chevron-thin-up" size={25} color="white" />
                  ) : (
                    <Icon name="chevron-thin-down" size={25} color="white" />
                  )}
                </TouchableOpacity>
              </View>

              <Text className="text-[14px] text-white">02/27/23</Text>

              <View>
                <Text
                  className={`text-[16px] p-2 text-white duration-500 ease-out-in ${
                    showContent ? undefined : "hidden"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  a gravida tellus. Pellentesque vulputate ipsum at dui sodales
                  pretium. Fusce eu elit pulvinar, aliquet nulla vitae,
                  fermentum nunc. Aenean ac tempor lectus. Donec eu maximus
                  nunc, et luctus mauris. In volutpat lorem eleifend magna
                  feugiat, molestie rhoncus sem tincidunt. Quisque est dolor,
                  faucibus ut volutpat consectetur, ultricies in dolor. Sed
                  lobortis metus non consectetur convallis. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Maecenas molestie ultrices tincidunt.
                </Text>
              </View>

              <TouchableOpacity className="bg-green-500 rounded-[50px] w-[40%] flex justify-center items-center mt-5 self-end">
                <Text className=" p-2 font-semibold text-white">
                  IN PROGRESS
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default DashboardScreen;
