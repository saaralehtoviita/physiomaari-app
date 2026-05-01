import { Button, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../ui/styles";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { colors } from "../ui/colors";
import { SessionExercise, TrainingSession } from "../types/Exercise";
import NewExercise from "../components/NewExcercise";
import NewSession from "../components/NewSession";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddSessionScreen() {
  const [sessionId, setSessionId] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        contentContainerStyle={{
          padding: 10,
          gap: 10,
        }}
      >
        <NewSession onSessionCreated={setSessionId} />
        <NewExercise sessionId={sessionId} />
      </ScrollView>
    </SafeAreaView>
  );
}
