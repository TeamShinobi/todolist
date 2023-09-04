import * as React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text as ErrorMessage,
} from "react-native";
import axios from "./../plugin/axios/Path";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignupScreen = ({ navigation }) => {
  const [userInput, setUserinput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

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
              value={userInput.firstName}
              onChangeText={(value) =>
                setUserinput({ ...userInput, firstName: value })
              }
            />
            <TextInput
              className=" border-[1px] rounded-lg border-b-gray-950 h-[40px] p-2 mb-5"
              placeholder="Last Name"
              value={userInput.lastName}
              onChangeText={(value) =>
                setUserinput({ ...userInput, lastName: value })
              }
            />
            <TextInput
              className=" border-[1px] rounded-lg border-b-gray-950 h-[40px] p-2 mb-5"
              placeholder="Username"
              value={userInput.userName}
              onChangeText={(value) =>
                setUserinput({ ...userInput, userName: value })
              }
            />
            <TextInput
              className=" border-[1px] rounded-lg border-b-gray-950 h-[40px] p-2 mb-5"
              placeholder="Email"
              value={userInput.email}
              onChangeText={(value) =>
                setUserinput({ ...userInput, email: value })
              }
            />
            <TextInput
              className=" border-[1px] rounded-lg h-[40px] p-2 mb-7"
              placeholder="Password"
              secureTextEntry={true}
              value={userInput.password}
              onChangeText={(value) =>
                setUserinput({ ...userInput, password: value })
              }
            />
          </KeyboardAwareScrollView>
          <View className="flex flex-row justify-end">
            <TouchableOpacity
              className=" h-[40px] justify-center items-center flex w-[30%] rounded-xl mr-2 border-[2px] border-black"
              onPress={() => navigation.navigate("Home")}
            >
              <Text className="text-black font-bold text-[16px]">SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-black h-[40px] justify-center items-center flex w-[25%] rounded-xl"
              onPress={() => {
                axios
                  .post(`account/auth/users/`, {
                    username: userInput.userName,
                    email: userInput.email,
                    first_name: userInput.firstName,
                    last_name: userInput.lastName,
                    password: userInput.password,
                  })
                  .then((response) => {
                    console.log("User registration successful:", response.data);
                  })
                  .catch(function (error) {
                    console.error("An error occurred:", error);
                  });
                // console.log({
                //   Username: userInput.userName,
                //   Email: userInput.email,
                //   FirstName: userInput.firstName,
                //   LastName: userInput.lastName,
                //   Password: userInput.password,
                // });
              }}
            >
              <Text className="text-white font-bold text-[16px]">CREATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
