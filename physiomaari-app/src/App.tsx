import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import UserBottomTabNavigation from "./navigation/UserBottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { UserRole, AppUser } from "./types/User";
import { demoUsers } from "../demodata";
import CoachBottomTabNavigation from "./navigation/CoachBottomTabNavigation";
import UserContext from "./hooks/UserContext";

export default function App() {
  //demodatasta tuodaan rooli, jonka mukaan navigointi määräytyy (0 = user, 1 = coach, 2 = user)
  const activeUser = demoUsers[1];

  return (
    <PaperProvider>
      <UserContext.Provider value={{ user: activeUser }}>
        <NavigationContainer>
          {activeUser.role === "coach" ? (
            <CoachBottomTabNavigation />
          ) : (
            <UserBottomTabNavigation />
          )}
        </NavigationContainer>
      </UserContext.Provider>
    </PaperProvider>
  );
}
