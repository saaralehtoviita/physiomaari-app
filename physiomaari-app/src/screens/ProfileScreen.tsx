import { Surface, Text } from "react-native-paper";
import { useUser } from "../hooks/UserContext";
import { View } from "react-native";
import { styles } from "../ui/styles";

export default function ProfileScreen() {
  const { user } = useUser();

  return (
    <Surface style={styles.profileInfo}>
      <Text>
        Name: {user?.firstName} {user?.lastName}{" "}
      </Text>
      <Text>Username: {user?.username} </Text>
      <Text>Email: {user?.email} </Text>
      <Text>Role: {user?.role} </Text>
    </Surface>
  );
}
