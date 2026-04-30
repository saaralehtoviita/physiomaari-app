import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserBottomTabNavigation from "./UserBottomTabNavigation";
import SessionView from "../components/SessionView";

const Stack = createNativeStackNavigator();

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
