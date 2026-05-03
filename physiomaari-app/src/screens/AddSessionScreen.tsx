import { useState } from "react";
import { ScrollView } from "react-native";
import { colors } from "../ui/colors";
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
  //täältä puuttuu koko näkymän tyhjentäminen + toiseen näkymään ohjaaminen tallentamisen jälkeen
}
