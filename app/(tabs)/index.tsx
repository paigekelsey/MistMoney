import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <Text className="text-6xl font-sans-medium">
        <Text className="text-[#121D43]">Mist</Text>
        <Text className="text-[#527AF9]">Money</Text>
      </Text>
      <Text className="text-xl font-sans-medium text-[#74839B]">
        Never miss your money.
      </Text>
      <Text className="text-xl font-sans-medium text-[#74839B]">
        Keep recurring spending in sight.
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 font-sans-bold rounded bg-primary text-white p-4"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 font-sans-bold rounded bg-primary text-white p-4"
      >
        Sign Up
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 font-sans-bold rounded bg-primary text-white p-4"
      >
        Sign In
      </Link>
    </SafeAreaView>
  );
}
