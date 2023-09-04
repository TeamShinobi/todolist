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

const HomeScreen = ({ navigation }) => {
  const [userInput, setUserinput] = useState({
    email: "",
    password: "",
  });
  const [Errmessage, setErrMessage] = useState(false);

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
            value={userInput.email}
            onChangeText={(value) =>
              setUserinput({ ...userInput, email: value })
            }
          />
          <TextInput
            className=" border-[1px] rounded-lg h-[40px] p-2 mb-7"
            placeholder="Password"
            secureTextEntry={true}
            type="password"
            value={userInput.password}
            onChangeText={(value) =>
              setUserinput({ ...userInput, password: value })
            }
          />

          <View className="flex flex-row justify-end">
            <TouchableOpacity
              className=" h-[40px] justify-center items-center flex w-[30%] rounded-xl mr-2 border-[2px] border-black"
              onPress={() => navigation.navigate("Signup")}
            >
              <Text className="text-black font-bold text-[16px]">SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-black h-[40px] justify-center items-center flex w-[25%] rounded-xl"
              onPress={() => {
                axios
                  .post(`account/auth/token/login/`, {
                    email: userInput.email,
                    password: userInput.password,
                  })
                  .then((response) => {
                    console.log(response.data);
                    setErrMessage(false);
                  })
                  .catch(function (error) {
                    if (error.response && error.response.status === 400) {
                      setErrMessage(true);
                    } else {
                      console.error("An error occurred:", error);
                    }
                  });
              }}
            >
              <Text className="text-white font-bold text-[16px]">ENTER</Text>
            </TouchableOpacity>
          </View>
          <ErrorMessage className="text-center my-7 text-red-600">
            {Errmessage
              ? "Unable to log in with provided credentials."
              : undefined}
          </ErrorMessage>
          <View className="flex flex-row mb-5 justify-center">
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
