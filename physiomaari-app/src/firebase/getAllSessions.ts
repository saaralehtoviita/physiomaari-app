import {
  collection,
  getCountFromServer,
  getDocs,
  query,
  where,
} from "firebase/firestore";
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
      id: docSnap.id,
      title: d.title,
      description: d.description,
      datePlanned: d.datePlanned?.toDate?.() ?? null,
      dateCompleted: d.dateCompleted?.toDate?.() ?? null,
      userId: d.userId,
      status: d.status,
      exercises,
    } as TrainingSession);
  }
  return sessions;
}

//yhden käyttäjän sessioiden haku
//vastaa pyyntöä GET /sessions/userId
export async function getUserSessions(
  userId: string,
): Promise<TrainingSession[]> {
  const q = query(collection(db, "sessions"), where("userId", "==", userId));

  const snapshot = await getDocs(q);

  const sessions: TrainingSession[] = [];

  snapshot.forEach((docSnap) => {
    const data = docSnap.data();

    sessions.push({
      id: docSnap.id,
      title: data.title,
      description: data.description,
      datePlanned: data.datePlanned?.toDate?.() ?? null,
      dateCompleted: data.dateCompleted?.toDate?.() ?? null,
      userId: data.userId,
      status: data.status,
    } as TrainingSession);
  });

  return sessions;
}

//yhden käyttäjän sessioiden laskeminen
export async function countUserSessions(userId: string) {
  const q = query(collection(db, "sessions"), where("userId", "==", userId));

  const snapshot = await getCountFromServer(q);

  return snapshot.data().count;
}
