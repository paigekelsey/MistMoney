import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Forecast = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <Text>Forecast Screen Placeholder</Text>
    </SafeAreaView>
  );
};

export default Forecast;
