import { addDoc, collection, serverTimestamp } from "firebase/firestore";
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
        userId: comment.userCommentId,
        exerciseId: comment.exerciseId,
        commentWritten: serverTimestamp(),
      },
    );
    console.log("Document written with ID: ", commentRef.id);
    return commentRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}
