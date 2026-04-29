import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "./config";

WebBrowser.maybeCompleteAuthSession();

export function useGoogleLogin() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      "328730240735-slbb75uhtup3i65r9sngq889h4mtvub5.apps.googleusercontent.com",
  });

  useEffect(() => {
    const signIn = async () => {
      if (response?.type === "success") {
        const { id_token } = response.authentication;

        const credential = GoogleAuthProvider.credential(id_token);

        await signInWithCredential(auth, credential);
      }
    };

    signIn();
  }, [response]);

  return { promptAsync, request };
}
