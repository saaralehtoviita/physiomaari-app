import { subcollection } from "firebase/firestore/pipelines";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

//testing data adding
export async function testAddSession() {
  try {
    const sessionRef = await addDoc(collection(db, "sessions"), {
      session_title: "lower body workout",
      description: "this session consists of....",
      datePlanned: "2026-05-02",
      status: "upcoming",
      userId: "2",
    });

    await addDoc(collection(db, "sessions", sessionRef.id, "exercises"), {
      title: "Squats",
      description: "3 x 10",
      status: "upcoming",
    });
    console.log("Document writted with ID: ", sessionRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
