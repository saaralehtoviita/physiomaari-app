import { FlatList, Text } from "react-native";
import { getSessions } from "../firebase/getAllSessions";
import { Surface } from "react-native-paper";
import { styles } from "../ui/styles";
import { TrainingSession } from "../types/Exercise";
import { useEffect, useState } from "react";

export default function SessionsListed() {
  const [sessions, setSessions] = useState<TrainingSession[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getSessions();
      setSessions(data);
    }
    load();
  }, []);

  return (
    <Surface>
      <FlatList
        style={styles.userList}
        data={sessions}
        keyExtractor={(item) => item.sessionId}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </Surface>
  );
}
