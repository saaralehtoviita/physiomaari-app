import { FlatList, View } from "react-native";
import { Card, Surface, Text } from "react-native-paper";
import { styles } from "../ui/styles";
import { TrainingSession } from "../types/Exercise";
import { useSessions } from "../hooks/SessionsContext";
import { FontAwesome } from "@expo/vector-icons";
import { useUsers } from "../hooks/UserContext";
import { colors } from "../ui/colors";
import Feather from "react-native-vector-icons/Feather";

//käyttäjän tehdyt treenit listataan tässä
//jatkossa tätä kautta käyttäjä pääsee sessiota klikkaamalla tarkastelemaan yksittäistä sessiota ja muokkaamaan sen kommentteja
export default function SessionsCompletedScreen() {
  const { sessions } = useSessions();
  const { activeUser } = useUsers();

  const sessionsUpcoming: TrainingSession[] = sessions
    .filter(
      (s) =>
        s.status === "completed" && s.userId === activeUser?.id && !!s.title,
    )
    .sort((a, b) => {
      if (!a.dateCompleted) return 1;
      if (!b.dateCompleted) return -1;
      return (
        b.dateCompleted.toDate().getTime() - a.dateCompleted.toDate().getTime()
      );
    });
  console.log(sessionsUpcoming);

  const renderStatusIcon = (status?: string) => {
    if (status === "completed") {
      return <Feather name="check-square" size={12} />;
    }
    return <Feather name="square" size={12} />;
  };
  return (
    <Surface style={styles.surfaceCards}>
      <FlatList
        style={styles.userList}
        data={sessionsUpcoming}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title
              title={item.title.toUpperCase()}
              titleStyle={{ fontWeight: "bold" }}
            />
            <Card.Content style={{ gap: 6 }}>
              <Text style={{ opacity: 0.7, marginBottom: 6 }}>
                <FontAwesome name="calendar-check-o" size={20} />
                {item.dateCompleted?.toDate().toLocaleDateString("fi-FI")}
              </Text>
              <Surface
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 6,
                  backgroundColor: colors.backgroundDarker,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                {item.exercises?.map((e) => (
                  <View
                    key={e.id}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                      marginBottom: 4,
                    }}
                  >
                    {renderStatusIcon(e.status)}
                    <Text style={{ fontSize: 12 }}>{e.title}</Text>
                  </View>
                ))}
              </Surface>
            </Card.Content>
          </Card>
        )}
      ></FlatList>
    </Surface>
  );
}
