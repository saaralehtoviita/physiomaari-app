import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { TrainingSession, SessionExercise } from "../types/Exercise";

//funktio ottaa vastaan TrainingSession olion
//lisää sen sessions collectioniin firestoreen
export async function addSession(session: TrainingSession) {
  try {
    const sessionRef = await addDoc(collection(db, "sessions"), {
      title: session.title,
      description: session.description,
      datePlanned: session.datePlanned,
      userId: session.userId,
      status: "upcoming",
      createdAt: serverTimestamp(),
    });
    console.log("Document writted with ID: ", sessionRef.id);
    return sessionRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function addExerciseTosession(
  exercise: SessionExercise,
  sessionId: string,
) {
  try {
    const exRef = await addDoc(
      collection(db, "sessions", sessionId, "exercises"),
      {
        title: exercise.title,
        description: exercise.description,
        status: exercise.status ?? "upcoming",
        videoUrl: exercise.videoUrl,
      },
    );
    console.log("Exercise document written with ID: ", exRef.id);
    return exRef.id;
  } catch (e) {
    console.error("error adding document: ", e);
    throw e;
  }
}
