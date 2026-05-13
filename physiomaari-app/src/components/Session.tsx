import { Button, List, Surface } from "react-native-paper";
import { useState } from "react";
import { TrainingSession } from "../types/Exercise";
import { setStatusToCompleted } from "../firebase/updateSession";
import { styles } from "../ui/styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  session: TrainingSession;
};

type Nav = NativeStackNavigationProp<RootStackParamList>;

//yksittäisen session tiedot, komponentti "lähetetään" sessionsUpcomingScreen:lle listattavaksi
export default function Session({ session }: Props) {
  //haitarin sulkeminen/avaaminen
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  //session ja sessionviewn välinen navigaatio rakennettu tekoälyn avustuksella
  const navigation = useNavigation<Nav>();

  function viewSession() {
    console.log(session.id);
    if (!session.id) return;
    navigation.navigate("SessionView", {
      sessionId: session.id,
    });
  }

  //useiden sessioiden päivämäärät näkyvät nullina
  const title =
    session.datePlanned.toString().substring(0, 10) +
    " " +
    session.title.toUpperCase();

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
