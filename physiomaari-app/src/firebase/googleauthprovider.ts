import {
  GoogleAuthProvider,
  signOut,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "./config";

const provider = new GoogleAuthProvider();

//funktio sisäänkirjautumiselle
export async function signInWithGoogle(idToken: string) {
  try {
    const credential = GoogleAuthProvider.credential(idToken);

    const result = await signInWithCredential(auth, credential);
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...

    return user;
  } catch (error) {
    console.error("Login error: ", error);
    throw error;
  }
}

//funktio uloskirjautumiselle
export async function logout() {
  await signOut(auth);
}
