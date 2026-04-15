import { useState } from "react";
import { TrainingSession } from "../types/Exercise";
import { Surface, Text, TextInput, Button } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../ui/styles";
import { colors } from "../ui/colors";
import { testAddSession } from "../firebase/firestoreTest";

export default function NewSession() {
  const [sessionTitle, setSessionTitle] = useState("");
  const [sessionDescription, setSessionDescription] = useState("");
  const [exercises, setExercies] = useState([]);

  //tämä funktio hoitaa myöhemmin uuden session tallentamisen kantaan
  function saveSession(title: string, description: string) {
    console.log("SessionTitle: " + title);
    console.log("SessionDescription: " + description);
    const newSession: TrainingSession = {
      sessionId: 123,
      title: sessionTitle,
      description: sessionDescription,
      status: "upcoming",
      datePlanned: "2026-05-06",
      exercises: [],
    };
    console.log(newSession);
    //tyhjennetään kentät
    setSessionTitle("");
    setSessionDescription("");
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.containerSession}>
        <Text style={styles.heading}>Add new session</Text>
        <View style={styles.row}>
          <Text style={[styles.subHeading, styles.sessionLabel]}>
            Session title:
          </Text>
          <TextInput
            style={styles.sessionInput}
            value={sessionTitle}
            onChangeText={setSessionTitle}
            keyboardType="default"
            placeholder="Session title"
          />
        </View>
        <View style={styles.row}>
          <Text style={[styles.subHeading, styles.sessionLabel]}>
            Session description:
          </Text>
          <TextInput
            style={styles.sessionInput}
            value={sessionDescription}
            onChangeText={setSessionDescription}
            keyboardType="default"
            placeholder="Session description"
            numberOfLines={10}
            textColor={colors.primary}
          />
        </View>
        <Button
          mode="contained"
          style={styles.basicButton}
          buttonColor={colors.primary}
          rippleColor={colors.gray}
          contentStyle={{ height: 50 }}
          labelStyle={{ fontSize: 15 }}
          onPress={() => saveSession(sessionTitle, sessionDescription)}
        >
          Save Session
        </Button>

        <Button
          mode="contained"
          style={styles.basicButton}
          buttonColor={colors.primary}
          rippleColor={colors.gray}
          contentStyle={{ height: 50 }}
          labelStyle={{ fontSize: 15 }}
          onPress={() => testAddSession()}
        >
          Save Test
        </Button>
      </View>
    </Surface>
  );
}
