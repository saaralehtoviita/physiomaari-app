import { View } from "react-native";
import { Button } from "react-native-paper";

function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Button>Testi</Button>
      <Button onPress={() => navigation.navigate("Completed exercises")}>
        Completed exercises
      </Button>
      <Button onPress={() => navigation.navigate("Upcoming exercises")}>
        Upcoming exercises
      </Button>
    </View>
  );
}

export default HomeScreen;
