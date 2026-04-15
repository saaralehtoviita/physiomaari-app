import { FlatList, Text } from "react-native";
import { demoTrainingSessions } from "../../demodata";
import { Surface } from "react-native-paper";
import { styles } from "../ui/styles";
import { TrainingSession } from "../types/Exercise";

const sessionsUpcoming: TrainingSession[] = demoTrainingSessions.filter(
  (s) => s.status === "upcoming",
);

export default function ExercisesUpcoming() {
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
