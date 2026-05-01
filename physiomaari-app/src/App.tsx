import { Provider as PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";

import CoachBottomTabNavigation from "./navigation/CoachBottomTabNavigation";
import { UsersProvider, useUsers } from "./hooks/UserContext";
import { SessionsProvider } from "./hooks/SessionsContext";
import UserStackNavigation from "./navigation/Navigation";

export default function App() {
  function AppContent() {
    //haetaan aktiviinen käyttäjä UserContextin userUsersin kautta
    const { activeUser } = useUsers();

    return (
      <NavigationContainer>
        {activeUser?.role === "coach" ? (
          <CoachBottomTabNavigation />
        ) : (
          <UserStackNavigation />
        )}
      </NavigationContainer>
    );
  }

  return (
    <PaperProvider>
      <UsersProvider>
        <SessionsProvider>
          <AppContent />
        </SessionsProvider>
      </UsersProvider>
    </PaperProvider>
  );
}
