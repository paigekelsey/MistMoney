import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const RadarDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Radar Details: {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  );
};

export default RadarDetails;
