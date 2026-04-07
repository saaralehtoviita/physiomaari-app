import { Surface, Text } from "react-native-paper";
import { demoUsers } from "../../demodata";
import { styles } from "../ui/styles";
import { FlatList } from "react-native";

export default function AllUsersListedScreen() {
  return (
    <Surface>
      <FlatList
        style={styles.userList}
        data={demoUsers}
        renderItem={({ item }) => (
          <Text>
            {item.lastName}, {item.firstName}
          </Text>
        )}
        keyExtractor={(item, index) => item.lastName}
      />
    </Surface>
  );
}
