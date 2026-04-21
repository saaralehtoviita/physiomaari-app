import { FlatList, Text } from "react-native";
import { Surface } from "react-native-paper";
import { styles } from "../ui/styles";
import { TrainingSession } from "../types/Exercise";
import { useSessions } from "../hooks/SessionsContext";

export default function ExercisesUpcoming() {
  const { sessions } = useSessions();

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
