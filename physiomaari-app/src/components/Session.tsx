import { Button, List, Surface } from "react-native-paper";
import { useState } from "react";
import { TrainingSession } from "../types/Exercise";
import { setStatusToCompleted } from "../firebase/updateSession";
import { styles } from "../ui/styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  session: TrainingSession;
};

export default function Session({ session }: Props) {
  //haitarin sulkeminen/avaaminen
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  const navigation = useNavigation();

  function viewSession() {
    if (!session.sessionId) return;
    navigation.navigate("SessionView", {
      sessionId: session.sessionId,
    });
  }

  const title = session.datePlanned + " " + session.title.toUpperCase();

  return (
    <List.Section style={{ marginBottom: 5 }}>
      <List.Accordion
        style={styles.accordion}
        title={title}
        left={(props) => <List.Icon {...props} icon="dumbbell" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <Surface elevation={3} style={styles.accordionSurface}>
          {session.exercises?.map((ex) => (
            <List.Item
              key={ex.id}
              title={ex.title}
              left={(props) => <List.Icon {...props} icon="circle-medium" />}
            />
          ))}

          <Button
            mode="contained"
            style={styles.viewButton}
            contentStyle={{ paddingVertical: 4 }}
            onPress={viewSession}
          >
            View and comment
          </Button>
        </Surface>
        {/* <Button style={styles.basicButton} onPress={() => showSession(session.sessionId)}>
          View session
        </Button> */}
      </List.Accordion>
    </List.Section>
  );
}
