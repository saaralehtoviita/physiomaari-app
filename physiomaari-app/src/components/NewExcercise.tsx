import { View } from "react-native";
import { Surface, Text, TextInput, Button } from "react-native-paper";
import { styles } from "../ui/styles";
import { colors } from "../ui/colors";
import { use, useEffect, useState } from "react";
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
  const [exercises, setExercises] = useState<SessionExercise[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  //taulukon ja errormessagen tyhjäys kun sessionId vaihtuu
  useEffect(() => {
    setExercises([]);
    setErrorMessage("");
  }, [sessionId]);

  //harjoitteen luominen ja tallentaminen
  function createExerciseAndSave() {
    //virheiden käsittelyä
    if (!sessionId) {
      setErrorMessage("Cant add exercise without session");
      return;
    }

    if (!exerciseTitle || !exerciseDescription) {
      setErrorMessage("Please add values for title and description.");
      return;
    }

    //jos ei virheitä, luodaan uusi olio
    const newExercise: SessionExercise = {
      id: "",
      title: exerciseTitle,
      description: exerciseDescription,
      videoUrl: videoUrl,
    };

    //läheteään apufunktion kautta firstoreen
    addExerciseTosession(newExercise, sessionId);

    //lisätään taulukkoon
    setExercises((prev) => [...prev, newExercise]);

    //tietojen tyhjentäminen onnistuneen tallennuksen jälkeen
    setExerciseTitle("");
    setExerciseDescription("");
    setVideoUrl("");

    setErrorMessage("");
  }

  return (
    <Surface style={styles.surfaceContent}>
      <View style={styles.surfaceContent}>
        <Text style={styles.mediumTitle}>Add new exercise</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.sessionInput}
            value={exerciseTitle}
            onChangeText={setExerciseTitle}
            keyboardType="default"
            placeholder="...exercise title"
            label="Title"
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.sessionInput}
            value={exerciseDescription}
            onChangeText={setExerciseDescription}
            keyboardType="default"
            placeholder="Exercise description"
            multiline
            numberOfLines={10}
            textColor={colors.primary}
            label="Description"
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.sessionInput}
            value={videoUrl}
            onChangeText={setVideoUrl}
            keyboardType="default"
            placeholder="Video url"
            multiline
            numberOfLines={2}
            textColor={colors.primary}
            label="Video URL"
          />
        </View>
        <Button
          mode="contained"
          style={styles.completeButton}
          onPress={() => createExerciseAndSave()}
        >
          Save Exercise
        </Button>
        {errorMessage ? (
          <Text style={{ color: colors.error, marginTop: 10 }}>
            {errorMessage}
          </Text>
        ) : null}
      </View>
      {exercises.length > 0 && (
        <View>
          <Text style={styles.smallTitle}>Added exercises:</Text>
          {exercises.map((ex, index) => (
            <Text key={index}>{ex.title}</Text>
          ))}
        </View>
      )}
    </Surface>
  );
}
