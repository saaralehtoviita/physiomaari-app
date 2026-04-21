import { Surface, Text } from "react-native-paper";
import { styles } from "../ui/styles";
import { FlatList } from "react-native";
import { useUsers } from "../hooks/UserContext";

//tässä listataan kaikki käyttäjät
//tämä näkymä vain coachille
//mahdollisesti tätä kautta etsitään oikea käyttäjä ja navigoidaan addsessionscreenille jolloin tätä kautta määräytyy userId

export default function AllUsersListedScreen() {
  const { users } = useUsers();

  const noCoaches = users.filter((u) => u.role === "user");

  return (
    <Surface>
      <FlatList
        style={styles.userList}
        data={noCoaches}
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
