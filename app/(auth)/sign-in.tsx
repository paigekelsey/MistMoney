import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <Text>Sign In Screen Placeholder</Text>
      <Link href="/(auth)/sign-up">{"Don't have an account? Sign up"}</Link>
    </SafeAreaView>
  );
};

export default SignIn;
