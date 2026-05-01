import { FlatList } from "react-native";
import { Card, Surface, Text } from "react-native-paper";
import { styles } from "../ui/styles";
import { TrainingSession } from "../types/Exercise";
import { useSessions } from "../hooks/SessionsContext";
import { FontAwesome } from "@expo/vector-icons";
import { useUsers } from "../hooks/UserContext";

//käyttäjän tehdyt treenit listataan tässä
//täältä puuttuu aktiivisen käyttäjän haku, nyt näkyy kaikki tehdyt treenit
export default function SessionsCompletedScreen() {
  const { sessions } = useSessions();
  const { activeUser } = useUsers();

  const sessionsUpcoming: TrainingSession[] = sessions.filter(
    (s) => s.status === "completed" && s.userId === activeUser?.id && !!s.title,
  );
  console.log(sessionsUpcoming);
  return (
    <Surface style={styles.surfaceCards}>
      <FlatList
        style={styles.userList}
        data={sessionsUpcoming}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={item.title.toUpperCase()} />
            <Card.Content>
              <Text variant="bodyMedium">
                <FontAwesome name="calendar-check-o" size={20} />
                {item.dateCompleted?.toLocaleDateString("fi-FI")}
              </Text>
            </Card.Content>
          </Card>
        )}
      ></FlatList>
    </Surface>
  );
}
