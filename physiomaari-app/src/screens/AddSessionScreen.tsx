import { Button, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../ui/styles";
import { useState } from "react";
import { View } from "react-native";
import { colors } from "../ui/colors";
import { TrainingSession } from "../types/Exercise";
import NewExercise from "../components/NewExcercise";
import NewSession from "../components/NewSession";

export default function AddSessionScreen() {
  return (
    <View>
      {/* <NewSession /> */}
      <NewExercise />
      <Button style={styles.basicButton}>Another exercise</Button>
    </View>
  );
}
