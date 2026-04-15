import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

//testing data adding
export async function testAddSession() {
  try {
    const docRef = await addDoc(collection(db, "sessions"), {
      session_id: "11",
      session_title: "lower body workout",
      description: "this session consists of....",
      datePlanned: "2026-05-02",
      user_id: "2",
    });
    console.log("Document writted with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
