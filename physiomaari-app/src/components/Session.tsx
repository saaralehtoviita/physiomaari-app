import { Button, List } from "react-native-paper";
import { useState } from "react";
import { TrainingSession } from "../types/Exercise";
import { setStatusToCompleted } from "../firebase/updateSession";
import { styles } from "../ui/styles";

type Props = {
  session: TrainingSession;
};

export default function Session({ session }: Props) {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  async function handleComplete() {
    if (!session.sessionId) return;

    await setStatusToCompleted(session.sessionId);
  }

  async function showSession() {}

  return (
    <List.Section>
      <List.Accordion
        title={session.title}
        left={(props) => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
      >
        {session.exercises?.map((ex) => (
          <List.Item
            key={ex.exerciseId}
            title={ex.title}
            description={ex.description}
          />
        ))}

        <Button style={styles.basicButton} onPress={handleComplete}>
          Complete!
        </Button>
        {/* <Button style={styles.basicButton} onPress={() => showSession(session.sessionId)}>
          View session
        </Button> */}
      </List.Accordion>
    </List.Section>
  );
}
