import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ContactUsScreen, HomeScreen } from "../screens";

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "steelblue" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactUsScreen}
        options={{
          title: "Contact Us",
          headerBackTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
