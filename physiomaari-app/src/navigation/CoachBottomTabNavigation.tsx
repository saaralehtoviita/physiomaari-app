import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CoachHomeScreen from "../screens/CoachHomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ExerciseTrackerScreen from "../screens/ExerciseTrackerScreen";
import ExercisesUpcoming from "../components/SessionsUpcoming";
import ExercisesDone from "../components/ExercisesDone";
import { FlatListComponent } from "react-native";
import { styles } from "../ui/styles";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { colors } from "../ui/colors";
import AddSessionScreen from "../screens/AddSessionScreen";
import AllUsersListedScreen from "../screens/AllUsersListedScreen";
import SessionsListed from "../screens/SessionsListed";

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
        component={CoachHomeScreen}
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
        name="Add session"
        component={AddSessionScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="add-to-list" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List of users"
        component={AllUsersListedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List of sessions"
        component={SessionsListed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserBottomTabNavigation;
