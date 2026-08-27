import "@/global.css";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="radar" options={{ title: "Radar" }} />
        <Tabs.Screen name="forecast" options={{ title: "Forecast" }} />
        <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      </Tabs>
    </>
  );
};

export default TabLayout;
