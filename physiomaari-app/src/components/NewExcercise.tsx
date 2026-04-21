import { View } from "react-native";
import { Surface, Text, TextInput, Button } from "react-native-paper";
import { styles } from "../ui/styles";
import { colors } from "../ui/colors";
import { useState } from "react";
import { testAddSession } from "../firebase/firestoreTest";
import { SessionExercise } from "../types/Exercise";
import { addExerciseTosession } from "../firebase/saveSessionFirestore";

type Props = {
  sessionId: string | null;
};
export default function NewExercise({ sessionId }: Props) {
  const [exerciseTitle, setExerciseTitle] = useState("");
  const [exerciseDescription, setExerciseDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  function createExerciseAndSave() {
    if (!sessionId) {
      console.log("Cant add exercise without session");
      return;
    }
    const newExercise: SessionExercise = {
      title: exerciseTitle,
      description: exerciseDescription,
      videoUrl: videoUrl,
    };

    addExerciseTosession(newExercise, sessionId);
  }

  return (
    <View style={styles.containerSession}>
      <Text style={styles.heading}>Add new exercise</Text>
      <View style={styles.row}>
        <Text style={[styles.subHeading, styles.sessionLabel]}>
          Exercise title:
        </Text>
        <TextInput
          style={styles.sessionInput}
          value={exerciseTitle}
          onChangeText={setExerciseTitle}
          keyboardType="default"
          placeholder="Exercise title"
        />
      </View>
      <View style={styles.row}>
        <Text style={[styles.subHeading, styles.sessionLabel]}>
          Exercise description:
        </Text>
        <TextInput
          style={styles.sessionInput}
          value={exerciseDescription}
          onChangeText={setExerciseDescription}
          keyboardType="default"
          placeholder="Exercise description"
          numberOfLines={10}
          textColor={colors.primary}
        />
      </View>
      <View style={styles.row}>
        <Text style={[styles.subHeading, styles.sessionLabel]}>Video URL:</Text>
        <TextInput
          style={styles.sessionInput}
          value={videoUrl}
          onChangeText={setVideoUrl}
          keyboardType="default"
          placeholder="Video url"
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
        onPress={() => createExerciseAndSave()}
      >
        Save Exercise
      </Button>
    </View>
  );
}
