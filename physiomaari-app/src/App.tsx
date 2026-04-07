import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import UserBottomTabNavigation from "./navigation/UserBottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { UserRole, AppUser } from "./types/User";
import { demoUsers } from "../demodata";
import CoachBottomTabNavigation from "./navigation/CoachBottomTabNavigation";

export default function App() {
  //demodatasta tuodaan rooli, jonka mukaan navigointi määräytyy
  const activeUserRole = demoUsers[1]?.role;

  return (
    <PaperProvider>
      <NavigationContainer>
        {activeUserRole === "coach" ? (
          <CoachBottomTabNavigation />
        ) : (
          <UserBottomTabNavigation />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}
