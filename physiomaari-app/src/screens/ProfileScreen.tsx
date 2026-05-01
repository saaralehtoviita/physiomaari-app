import { Card, Surface, Text } from "react-native-paper";
import { useUsers } from "../hooks/UserContext";

import { styles } from "../ui/styles";
import { colors } from "../ui/colors";

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
    <Card
      mode="elevated"
      style={{
        backgroundColor: colors.backgroundDarker,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <Card.Title title="User profile info" />

      <Card.Content>
        <Surface style={{ padding: 5, borderRadius: 5 }}>
          <Text>
            Name: {activeUser.firstName} {activeUser.lastName}
          </Text>
          <Text>Username: {activeUser.username} </Text>
          <Text>Email: {activeUser.email} </Text>
          <Text>Role: {activeUser.role} </Text>
          <Text>ID: {activeUser.id}</Text>
        </Surface>
      </Card.Content>

      {/* <Button onPress={handleLogout}>Log out</Button> */}
    </Card>
  );
}
