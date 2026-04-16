import { createContext, useContext, useEffect, useState } from "react";
import { TrainingSession } from "../types/Exercise";
import { getSessions } from "../firebase/getAllSessions";

//luodaan tyyppi
//attribuutteina aluksi tyhjä lista sessioita ja boolean
type SessionsContextType = {
  sessions: TrainingSession[];
  loading: boolean;
};

//alustetaan jaettava data
const SessionsContext = createContext<SessionsContextType | undefined>(
  undefined,
);

//luodaan uudelleen käytettävä komponentti, johon "kääritään" ne komponentit, jotka voivat käyttää jaettua dataa
export function SessionsProvider({ children }: any) {
  const [sessions, setSessions] = useState<TrainingSession[]>([]);
  const [loading, setLoading] = useState(true);

  //haetaan sessiot firestoresta
  useEffect(() => {
    async function load() {
      const data = await getSessions();
      setSessions(data);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <SessionsContext.Provider value={{ sessions, loading }}>
      {children}
    </SessionsContext.Provider>
  );
}

//tätä funktiota voi kutsua muualta, kun tarvitaan sessioiden tietoja
export function useSessions() {
  const context = useContext(SessionsContext);
  if (!context) {
    throw new Error("useUsers must be used inside UsersProvider");
  }

  return context;
}
