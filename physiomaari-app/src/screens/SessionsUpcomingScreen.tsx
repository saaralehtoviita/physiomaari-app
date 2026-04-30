import { FlatList, Text } from "react-native";
import { Surface } from "react-native-paper";
import { styles } from "../ui/styles";
import { TrainingSession } from "../types/Exercise";
import { useSessions } from "../hooks/SessionsContext";
import { useUsers } from "../hooks/UserContext";
import Session from "../components/Session";

//käyttäjän tulevat treenit listataan tässä
//täältä puuttuu aktiivisen käyttäjän haku, nyt näkyy kaikki tulevat treenit
export default function SessionsUpcomingScreen() {
  const { sessions } = useSessions();
  const { activeUser } = useUsers();

  const sessionsUpcoming: TrainingSession[] = sessions.filter(
    (s) =>
      s.status === "upcoming" &&
      s.userId === activeUser?.appUserId &&
      !!s.title,
  );
  return (
    <FlatList
      data={sessionsUpcoming}
      keyExtractor={(item) => item.sessionId}
      renderItem={({ item }) => <Session session={item} />}
    />
  );
}
