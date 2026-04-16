import { FlatList, Text } from "react-native";
import { getSessions } from "../firebase/getAllSessions";
import { Surface } from "react-native-paper";
import { styles } from "../ui/styles";
import { TrainingSession } from "../types/Exercise";
import { useEffect, useState } from "react";
import { useSessions } from "../hooks/SessionsContext";

export default function SessionsListed() {
  const { sessions } = useSessions();

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
