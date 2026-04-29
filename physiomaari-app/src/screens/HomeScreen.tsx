import { Button, Surface, Text } from "react-native-paper";
import { logout, signInWithGoogle } from "../firebase/googleauthprovider";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const handleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("Logged in user", user);
    } catch (error) {
      console.log("Login failed");
    }
  };

  const handleLogout = async () => {
    await logout();
  };
  return (
    <SafeAreaView>
      <Surface>
        <Button onPress={handleLogin}>Sign in with Google</Button>
        <Button onPress={handleLogout}>Sign out</Button>
      </Surface>
    </SafeAreaView>
  );
}
