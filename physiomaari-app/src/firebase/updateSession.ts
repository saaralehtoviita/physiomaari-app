import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";
import { TrainingSession } from "../types/Exercise";

export async function findSession(
  sessionId: string,
): Promise<TrainingSession | null> {
  const docRef = doc(db, "sessions", sessionId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    console.log("Document data: ", data);
    const session = {
      sessionId: docSnap.id,
      title: data.title,
      description: data.description,
      datePlanned: data.datePlanned,
      userId: data.userId,
      status: data.status,
      exercises: data.exercises ?? [],
    };
    return session as TrainingSession;
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function setStatusToCompleted(sessionId: string): Promise<void> {
  const docRef = doc(db, "sessions", sessionId);

  await updateDoc(docRef, {
    status: "completed",
    dateCompleted: serverTimestamp(),
  });
}
