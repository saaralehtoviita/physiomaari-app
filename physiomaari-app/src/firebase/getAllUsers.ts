import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";
import { AppUser } from "../types/User";

export async function getUsers(): Promise<AppUser[]> {
  const snapshot = await getDocs(collection(db, "appUsers"));

  const data = snapshot.docs.map((doc) => {
    const d = doc.data();

    return {
      appUserId: doc.id,
      lastName: d.lastName,
      firstName: d.firstName,
      email: d.email,
      username: d.username,
      role: d.role,
    } as AppUser;
  });
  return data;
}
