import { Button, Surface, Text } from "react-native-paper";
import { useUsers } from "../hooks/UserContext";
import { View } from "react-native";
import { styles } from "../ui/styles";
import { colors } from "../ui/colors";
import { logoutUser } from "../firebase/authService";
import LoginScreen from "./LoginScreen";

export default function ProfileScreen() {
  //haetaan aktiivinen käyttäjä contextista
  const { activeUser } = useUsers();

  if (!activeUser) {
    return <Text style={{ color: colors.error }}>No active user</Text>;
  }

  /*   async function handleLogout() {
    await logoutUser();
  } */
  return (
    <Surface style={styles.profileInfo}>
      <Text>
        Name: {activeUser.firstName} {activeUser.lastName}
      </Text>
      <Text>Username: {activeUser.username} </Text>
      <Text>Email: {activeUser.email} </Text>
      <Text>Role: {activeUser.role} </Text>
      <Text>ID: {activeUser.appUserId}</Text>
      {/* <Button onPress={handleLogout}>Log out</Button> */}
    </Surface>
  );
}
