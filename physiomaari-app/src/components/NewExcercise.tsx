import { View } from "react-native";
import { Surface, Text, TextInput, Button } from "react-native-paper";
import { styles } from "../ui/styles";
import { colors } from "../ui/colors";
import { useState } from "react";

export default function NewExercise() {
  const [exerciseTitle, setExerciseTitle] = useState("");
  const [exerciseDescription, setExerciseDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

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
        onPress={() =>
          saveExercise(exerciseTitle, exerciseDescription, videoUrl)
        }
      >
        Save Session
      </Button>
    </View>
  );
}
