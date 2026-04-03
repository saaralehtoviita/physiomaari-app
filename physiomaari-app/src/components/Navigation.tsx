import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExercisesDone from "./ExercisesDone";
import ExercisesUpcoming from "./ExercisesUpcoming";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Completed exercises" component={ExercisesDone} />
        <Stack.Screen name="Upcoming exercises" component={ExercisesUpcoming} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
