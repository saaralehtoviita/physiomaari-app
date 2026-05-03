import { FlatList, Text } from "react-native";
import { Surface } from "react-native-paper";
import { styles } from "../ui/styles";
import { TrainingSession } from "../types/Exercise";
import { useSessions } from "../hooks/SessionsContext";
import { useUsers } from "../hooks/UserContext";
import Session from "../components/Session";

//käyttäjän tulevat treenit listataan tässä
//vain aktiivisen käyttäjän treenit, joilla on otsikko, näytetään
export default function SessionsUpcomingScreen() {
  const { sessions } = useSessions();
  const { activeUser } = useUsers();

  const sessionsUpcoming: TrainingSession[] = sessions.filter(
    (s) => s.status === "upcoming" && s.userId === activeUser?.id && !!s.title,
  );

  console.log("All sessions: ", sessionsUpcoming);
  console.log("Active user: ", activeUser);

  return (
    <FlatList
      data={sessionsUpcoming}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Session session={item} />}
    />
  );
}
