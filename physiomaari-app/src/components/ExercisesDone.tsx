import { FlatList, Text } from "react-native";
import { Surface } from "react-native-paper";
import { styles } from "../ui/styles";
import { TrainingSession } from "../types/Exercise";
import { useSessions } from "../hooks/SessionsContext";

//käyttäjän tehdyt treenit listataan tässä
//täältä puuttuu aktiivisen käyttäjän haku, nyt näkyy kaikki tehdyt treenit
export default function ExercisesDone() {
  const { sessions } = useSessions();

  const sessionsUpcoming: TrainingSession[] = sessions.filter(
    (s) => s.status === "completed",
  );
  return (
    <Surface>
      <FlatList
        style={styles.userList}
        data={sessionsUpcoming}
        renderItem={({ item }) => (
          <>
            <Text>{item.title}</Text>
            <Text>{item.exercises?.map((e) => e.title)}</Text>
          </>
        )}
      ></FlatList>
    </Surface>
  );
}
