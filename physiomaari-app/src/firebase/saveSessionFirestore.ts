import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { TrainingSession } from "../types/Exercise";

export async function addSession(session: TrainingSession) {
  try {
    const docRef = await addDoc(collection(db, "sessions"), {
      title: session.title,
      description: session.description,
      datePlanned: session.datePlanned,
      userId: session.userId,
      status: "upcoming",
    });
    console.log("Document writted with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
