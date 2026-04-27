import { FlatList, Text } from "react-native";
import { Surface } from "react-native-paper";
import { styles } from "../ui/styles";
import { TrainingSession } from "../types/Exercise";
import { useSessions } from "../hooks/SessionsContext";
import { useUsers } from "../hooks/UserContext";

//käyttäjän tulevat treenit listataan tässä
//täältä puuttuu aktiivisen käyttäjän haku, nyt näkyy kaikki tulevat treenit
export default function ExercisesUpcoming() {
  const { sessions } = useSessions();
  const { activeUser } = useUsers();

  const sessionsUpcoming: TrainingSession[] = sessions.filter(
    (s) => s.status === "upcoming",
  );
  return (
    <Surface>
      <FlatList
        style={styles.userList}
        data={sessionsUpcoming}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      ></FlatList>
    </Surface>
  );
}
