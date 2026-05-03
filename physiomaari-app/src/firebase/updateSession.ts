import {
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";
import { SessionExercise, TrainingSession } from "../types/Exercise";

//yhden session haku id:n perusteella
export async function findSession(
  sessionId: string,
): Promise<TrainingSession | undefined> {
  const docRef = doc(db, "sessions", sessionId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Session not found");
  }

  //yhden session harjoitteet
  const exerciseSnap = await getDocs(
    collection(db, "sessions", sessionId, "exercises"),
  );

  //jokaisen firestore dokumentin (doc) kopioidaan objektiin
  const exercises = exerciseSnap.docs.map(
    (doc) =>
      ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        status: doc.data().status,
        videoUrl: doc.data().videUrl,
      }) as SessionExercise,
  );

  //kopioidaan firestore dokumentin tiedot objektiin
  return {
    id: docSnap.id,
    title: docSnap.data().title,
    description: docSnap.data().description,
    datePlanned: docSnap.data().datePlanned,
    userId: docSnap.data().userId,
    status: docSnap.data().status,
    exercises,
  } as TrainingSession;
}

export async function setStatusToCompleted(sessionId: string): Promise<void> {
  const docRef = doc(db, "sessions", sessionId);

  await updateDoc(docRef, {
    status: "completed",
    dateCompleted: serverTimestamp(),
  });
}
