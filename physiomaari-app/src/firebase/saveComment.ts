import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { UserComment } from "../types/Exercise";
import { db } from "./config";

//kommentin tallentaminen
//parametrina sessionId ja exercise jotta voidaan tallentaa oikeisiin subcollectioneihin
export async function addComment(
  sessionId: string,
  exerciseId: string,
  comment: UserComment,
) {
  try {
    const commentRef = await addDoc(
      collection(
        db,
        "sessions",
        sessionId,
        "exercises",
        exerciseId,
        "comments",
      ),
      {
        comment: comment.comment,
        userId: comment.userId,
        exerciseId: comment.exerciseId,
        commentWritten: serverTimestamp(),
      },
    );

    const exerciseRef = doc(db, "sessions", sessionId, "exercises", exerciseId);

    //päivitetään harjoituksen status kommentin tallentamisen jälkeen
    await updateDoc(exerciseRef, {
      status: "completed",
    });

    console.log("Comment added + exercise completed");
    return commentRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}
