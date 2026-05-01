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

export default function SessionView() {
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

  const [comment, setComment] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  async function createCommentAndSave(exerciseId: string) {
    if (!sessionId || !session?.userId) {
      console.log("Cant add comment without session or userId");
    }
    const commentToSave = comment.trim();

    if (commentToSave.length === 0) {
      setMessage("Please write a comment");
    }
    const newComment: UserComment = {
      id: "", //firebase generoi
      comment: commentToSave,
      userId: session?.userId,
      exerciseId: exerciseId,
    };

    addComment(sessionId, exerciseId, newComment);
  }

  async function handleCompleteExercise() {}

  //sessiom merkitseminen tehdyksi
  async function handleComplete() {
    if (session === undefined) return;

    await setStatusToCompleted(session.id);
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
            {session?.datePlanned.substring(0, 10)}
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
                value={comment}
                placeholder="...write comment"
                onChangeText={setComment}
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
      </ScrollView>
    </SafeAreaView>
  );
}
