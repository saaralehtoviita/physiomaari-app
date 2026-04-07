import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExercisesDone from "../components/ExercisesDone";
import ExercisesUpcoming from "../components/ExercisesUpcoming";
import HomeScreen from "../screens/UserHomeScreen";

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
