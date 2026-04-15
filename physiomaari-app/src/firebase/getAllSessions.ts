import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";
import { TrainingSession } from "../types/Exercise";

//kaikkien sessioiden haku
//vastaa GET /sessions pyyntöä
//funktio hakee sessiot ja muuntaa ne TrainingSession-tyypeiksi
export async function getSessions(): Promise<TrainingSession[]> {
  const snapshot = await getDocs(collection(db, "sessions"));

  const data = snapshot.docs.map((doc) => {
    const d = doc.data();

    //sessionId tulee automaattisesti generoidusta dokumenttinumerosta
    //muut tiedot tallennetusta datasta
    return {
      sessionId: doc.id,
      title: d.title,
      description: d.description,
      datePlanned: d.datePlanned,
      userId: d.userId,
      status: d.status,
      exercises: d.exercises ?? [],
    } as TrainingSession;
  });

  return data;
}
