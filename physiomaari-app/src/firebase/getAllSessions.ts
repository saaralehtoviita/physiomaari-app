import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";
import { TrainingSession } from "../types/Exercise";

//kaikkien sessioiden haku
//vastaa GET /sessions pyyntöä
//funktio hakee sessiot ja muuntaa ne TrainingSession-tyypeiksi
export async function getSessions(): Promise<TrainingSession[]> {
  //hakee kaikki sessiot
  const snapshot = await getDocs(collection(db, "sessions"));

  //alustetaan sessions lista
  const sessions: TrainingSession[] = [];

  //käydään jokainen sessio läpi
  for (const docSnap of snapshot.docs) {
    const d = docSnap.data();

    //jokaisen session subcollection haetaan
    const exerciseData = await getDocs(
      collection(db, "sessions", docSnap.id, "exercises"),
    );

    //puretaan exercises
    const exercises = exerciseData.docs.map((ex) => ({
      id: ex.id,
      ...ex.data(),
    }));

    //sessionId tulee automaattisesti generoidusta dokumenttinumerosta
    //muut tiedot tallennetusta datasta
    sessions.push({
      sessionId: docSnap.id,
      title: d.title,
      description: d.description,
      datePlanned: d.datePlanned,
      userId: d.userId,
      status: d.status,
      exercises,
    } as unknown as TrainingSession);
  }
  return sessions;
}
