import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-5xl font-stretch-100%">
          <Text className="text-[#121D43]">Mist</Text>
          <Text className="text-[#527AF9]">Money</Text>
        </Text>
        <Text className="text-base font-stretch-condensed text-[#74839B]">
          Never miss your money.
        </Text>
        <Text className="text-base font-stretch-condensed text-[#74839B]">
          Keep recurring spending in sight.
        </Text>
        <Link
          href="/onboarding"
          className="mt-4 rounded bg-primary text-white p-4"
        >
          Go to Onboarding
        </Link>
        <Link
          href="/(auth)/sign-up"
          className="mt-4 rounded bg-primary text-white p-4"
        >
          Sign Up
        </Link>
        <Link
          href="/(auth)/sign-in"
          className="mt-4 rounded bg-primary text-white p-4"
        >
          Sign In
        </Link>
        <Link href="/radar/netflix">Netflix Subscription</Link>
        <Link
          href={{
            pathname: "/radar/[id]",
            params: { id: "barkbox" },
          }}
        >
          BarkBox Subscription
        </Link>
      </View>
    </SafeAreaView>
  );
}
