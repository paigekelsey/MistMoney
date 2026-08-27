import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Radar = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <Text>Radar Screen Placeholder</Text>
    </SafeAreaView>
  );
};

export default Radar;
