import { useState } from "react";
import { TrainingSession } from "../types/Exercise";
import { Surface, Text, TextInput, Button, Menu } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../ui/styles";
import { colors } from "../ui/colors";
import { testAddSession } from "../firebase/firestoreTest";
import { addSession } from "../firebase/saveSessionFirestore";
import { useUsers } from "../hooks/UserContext";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props = {
  onSessionCreated: (id: string) => void;
};
export default function NewSession({ onSessionCreated }: Props) {
  const { users } = useUsers();
  const [userId, setUserId] = useState("");

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const [sessionTitle, setSessionTitle] = useState("");
  const [sessionDescription, setSessionDescription] = useState("");
  const [datePlanned, setDatePlanned] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [date, setDate] = useState(new Date());
  const [pickerVisible, setPickerVisible] = useState(false);
  const [message, setMessage] = useState("");

  function onChange(event: any, selectedDate?: Date) {
    setPickerVisible(false);

    if (selectedDate) {
      setDate(selectedDate);
      setDatePlanned(selectedDate.toISOString());
    }
  }

  //funktio, joka ottaa vastaan tiedot lomakkeelta
  //luo uuden olion, ja lähettää sen addSessionilla firestoreen
  async function createSessionAndSave() {
    if (!sessionTitle || !sessionDescription || !datePlanned) {
      setErrorMessage("Please fill in values for title, description and date.");
      return;
    }

    if (!userId) {
      setErrorMessage("Please select a user.");
      return;
    }

    const newSession: TrainingSession = {
      id: "",
      status: "upcoming",
      title: sessionTitle,
      description: sessionDescription,
      datePlanned: datePlanned,
      userId: userId,
    };

    const id = await addSession(newSession);

    onSessionCreated(id);

    setSessionTitle("");
    setSessionDescription("");
    setDatePlanned("");

    setMessage(
      `Session ${sessionTitle}  added succesfully! You can now add exercises to session.`,
    );
  }

  return (
    <Surface style={styles.surfaceContent}>
      <View style={styles.surfaceContent}>
        <Text style={styles.mediumTitle}>Add new session</Text>
        <View style={styles.row}>
          {/* <Text style={[styles.subHeading, styles.sessionLabel]}>Title:</Text> */}
          <TextInput
            style={styles.sessionInput}
            value={sessionTitle}
            onChangeText={setSessionTitle}
            keyboardType="default"
            placeholder="...session title"
            label="Title"
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.sessionInput}
            value={sessionDescription}
            onChangeText={setSessionDescription}
            keyboardType="default"
            placeholder="...session description"
            multiline
            numberOfLines={10}
            textColor={colors.primary}
            label="Description"
          />
        </View>
        <View style={styles.row}>
          <Button
            mode="outlined"
            style={styles.buttonDate}
            contentStyle={{ height: 50, justifyContent: "flex-start" }}
            onPress={() => setPickerVisible(true)}
          >
            {datePlanned
              ? new Date(datePlanned).toLocaleDateString("fi-FI")
              : "Select date"}
          </Button>

          {pickerVisible && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button
              mode="contained"
              style={styles.basicButton}
              onPress={openMenu}
            >
              {userId
                ? users.find((u) => u.id === userId)?.username
                : "Select user"}
            </Button>
          }
        >
          {users.map((user) => (
            <Menu.Item
              key={user.id}
              onPress={() => {
                setUserId(user.id);
                closeMenu();
              }}
              title={user.username}
            />
          ))}
        </Menu>
        <Button
          mode="contained"
          style={styles.completeButton}
          onPress={() => createSessionAndSave()}
        >
          Save Session
        </Button>
        {errorMessage ? (
          <Text style={{ color: colors.error, marginTop: 10 }}>
            {errorMessage}
          </Text>
        ) : null}
        {message ? (
          <Text style={{ color: colors.text, marginTop: 10 }}>{message}</Text>
        ) : null}
      </View>
    </Surface>
  );
}
