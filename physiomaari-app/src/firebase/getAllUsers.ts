import {
  collection,
  getCountFromServer,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./config";
import { AppUser } from "../types/User";
import { TrainingSession } from "../types/Exercise";

export async function getUsers(): Promise<AppUser[]> {
  const snapshot = await getDocs(collection(db, "appUsers"));

  const data = snapshot.docs.map((doc) => {
    const d = doc.data();

    return {
      id: doc.id,
      lastName: d.lastName,
      firstName: d.firstName,
      email: d.email,
      username: d.username,
      role: d.role,
    } as AppUser;
  });
  return data;
}
