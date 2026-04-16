import { Surface, Text } from "react-native-paper";
import { useUsers } from "../hooks/UserContext";
import { View } from "react-native";
import { styles } from "../ui/styles";

export default function ProfileScreen() {
  const { activeUser } = useUsers();

  return (
    <Surface style={styles.profileInfo}>
      <Text>
        Name: {activeUser.firstName} {activeUser.lastName}{" "}
      </Text>
      <Text>Username: {activeUser.username} </Text>
      <Text>Email: {activeUser.email} </Text>
      <Text>Role: {activeUser.role} </Text>
    </Surface>
  );
}
