import { List, Surface, Text } from "react-native-paper";
import { styles } from "../ui/styles";
import { FlatList } from "react-native";
import { useUsers } from "../hooks/UserContext";
import { getUserSessions } from "../firebase/getAllSessions";
import { TrainingSession } from "../types/Exercise";
import { useEffect, useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

//tässä listataan kaikki käyttäjät roolilla user
//tämä näkymä vain coachille
//tätä kautta etsitään jatkossa oikea käyttäjä ja navigoidaan addsessionscreenille jolloin tätä kautta määräytyy userId

type UserData = {
  all: number;
  completed: number;
  upcoming: number;
};

export default function AllUsersListedScreen() {
  //kaikki käyttäjät
  const { users } = useUsers();

  //filtteröidään vain roolilla user
  const clients = users.filter((u) => u.role === "user");

  const [userData, setUserData] = useState<Record<string, UserData>>({});

  useEffect(() => {
    async function loadUserData() {
      const newUserData: Record<string, UserData> = {};

      //jaetaan treenit käyttäjälle userId:n mukaan
      for (const user of clients) {
        const sessions = await getUserSessions(user.id);

        //recordin avain = userId
        //arvoksi UserDatan alla olevat arvot
        newUserData[user.id] = {
          all: sessions.length,
          completed: sessions.filter((s) => s.status === "completed").length,
          upcoming: sessions.filter((s) => s.status === "upcoming").length,
        };
      }

      setUserData(newUserData);
    }

    loadUserData();
  }, [clients]);

  return (
    <Surface style={styles.surfaceTop}>
      <FlatList
        style={styles.container}
        data={clients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const data = userData[item.id];

          return (
            <List.Item
              title={`${item.firstName} ${item.lastName}`}
              description={
                data ? (
                  <>
                    <Text>
                      <MaterialCommunityIcons name="chart-box" size={16} /> All:
                      {data.all}
                      {"   "}
                    </Text>

                    <Text>
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={16}
                        color="green"
                      />{" "}
                      Completed:
                      {data.completed}
                      {"   "}
                    </Text>

                    <Text>
                      <MaterialCommunityIcons
                        name="clock-outline"
                        size={16}
                        color="orange"
                      />{" "}
                      Upcoming:
                      {data.upcoming}
                    </Text>
                  </>
                ) : (
                  "Loading..."
                )
              }
              left={(props) => <List.Icon {...props} icon="account" />}
            />
          );
        }}
      />
    </Surface>
  );
}
