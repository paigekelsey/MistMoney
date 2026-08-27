import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>Sign In Screen Placeholder</Text>
      <Link href="/(auth)/sign-up">{"Don't have an account? Sign up"}</Link>
    </View>
  );
};

export default SignIn;
