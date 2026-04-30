import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserHomeScreen from "../screens/UserHomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ExerciseTrackerScreen from "../screens/ExerciseTrackerScreen";
import ExercisesUpcoming from "../screens/SessionsUpcomingScreen";
import ExercisesDone from "../components/ExercisesDone";
import { FlatListComponent } from "react-native";
import { styles } from "../ui/styles";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { colors } from "../ui/colors";

const Tab = createBottomTabNavigator();

const UserBottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.background,
        tabBarInactiveTintColor: colors.primary,
        tabBarStyle: styles.bottomTabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={UserHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Exercise Tracker"
        component={ExerciseTrackerScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming exercises"
        component={ExercisesUpcoming}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="ordered-list" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Completed exercises"
        component={ExercisesDone}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons
              name="tracked-by-closed-completed"
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserBottomTabNavigation;
