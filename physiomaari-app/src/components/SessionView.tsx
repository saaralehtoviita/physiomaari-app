import { useRoute } from "@react-navigation/native";
import { Button, Icon, Surface, Text, TextInput } from "react-native-paper";
import { findSession, setStatusToCompleted } from "../firebase/updateSession";
import { TrainingSession, UserComment } from "../types/Exercise";
import { useEffect, useState } from "react";
import { styles } from "../ui/styles";
import { addComment } from "../firebase/saveComment";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { colors } from "../ui/colors";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type Nav = NativeStackNavigationProp<RootStackParamList>;

//komponentti, jolla näytetään käyttäjälle yksittäinen sessio harjoitteineen
//tässä bugi: vain yksi useState kommentille - kun kirjoittaa kommenttia, kaikkien harjoitteiden kommenttikentät päivittyvät
//--> tallennus kuitenkin taitaa onnistua
export default function SessionView() {
  //sessionViewn ja Sessionin välinen navigaatio rakennettu tekoälyn avustuksella
  const navigation = useNavigation<Nav>();
  const route = useRoute();
  const { sessionId } = route.params as {
    sessionId: string;
  };

  const [session, setSession] = useState<TrainingSession>();

  useEffect(() => {
    async function load() {
      if (!sessionId) return;

      //apufunktion kutsuminen, haetaan sessio id:llä
      const session = await findSession(sessionId);
      setSession(session);
    }

    load();
  }, [sessionId]);

  //kommenttilista
  const [comments, setComments] = useState<{ [exerciseId: string]: string }>(
    {},
  );

  const [comment, setComment] = useState<string>("");

  const [message, setMessage] = useState<string>("");

  async function createCommentAndSave(exerciseId: string) {
    if (!sessionId || !session?.userId) {
      console.log("Cant add comment without session or userId");
    }
    //haetaan listasta oikean harjoitteen kommenti
    const commentToSave = (comments[exerciseId] || "").trim();

    if (commentToSave.length === 0) {
      setMessage("Please write a comment");
      return;
    }

    const newComment: UserComment = {
      id: "", //firebase generoi
      comment: commentToSave,
      userId: session?.userId,
      exerciseId: exerciseId,
    };

    await addComment(sessionId, exerciseId, newComment);

    //kommenttikentän tyhjennys
    setComments((prev) => ({
      ...prev,
      [exerciseId]: "",
    }));

    //tänne metodi oikean harjoitteen etsimiseen ja merkitsemiseen tehdyksi
    //(metodi puuttuu backendista)
  }

  async function handleCompleteExercise() {}

  //sessiom merkitseminen tehdyksi
  async function handleComplete() {
    if (session === undefined) return;

    await setStatusToCompleted(session.id);

    setMessage("Comments saved and session marked as completed!");
    setComment("");

    navigation.navigate("Tabs", {
      screen: "Upcoming sessions",
    });
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Surface style={styles.surfaceTop} elevation={2}>
          <Text style={styles.mediumTitle}>
            <MaterialCommunityIcons name="list-box" size={22} />
            {session?.title.toUpperCase()}
          </Text>
          <Text style={styles.smallTitle}>
            <MaterialCommunityIcons name="calendar" size={20} />
            {session?.datePlanned.toString().substring(0, 10)}
          </Text>
          <Text style={styles.description}>
            <MaterialCommunityIcons name="text" size={18} />
            {session?.description}
          </Text>
          {session?.exercises?.map((e) => (
            <Surface style={styles.surfaceContent} elevation={4}>
              <Text style={styles.smallTitle}>{e.title.toUpperCase()}</Text>
              <Text style={styles.description}>{e.description}</Text>
              <TextInput
                mode="outlined"
                style={{ width: "100%" }}
                label="Comment"
                value={comments[e.id] || ""}
                placeholder="...write comment"
                onChangeText={(text) =>
                  setComments((prev) => ({
                    ...prev,
                    [e.id]: text,
                  }))
                }
                multiline
                numberOfLines={6}
              />
              <Button
                style={styles.completeButton}
                textColor="white"
                onPress={() => createCommentAndSave(e.id)}
              >
                Add comment
              </Button>
            </Surface>
          ))}
        </Surface>
        <Button
          style={styles.basicButton}
          textColor="white"
          onPress={handleComplete}
        >
          Complete session
        </Button>
        {message ? (
          <Text style={{ color: colors.completedLight }}>{message}</Text>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}
