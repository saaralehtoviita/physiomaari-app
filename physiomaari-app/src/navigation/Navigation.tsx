import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserBottomTabNavigation from "./UserBottomTabNavigation";
import SessionView from "../components/SessionView";

import type { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function UserStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={UserBottomTabNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SessionView"
        component={SessionView}
        options={{ title: "Session" }}
      />
    </Stack.Navigator>
  );
}
