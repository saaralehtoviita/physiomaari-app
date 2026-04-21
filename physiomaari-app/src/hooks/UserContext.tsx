import { createContext, useContext, useEffect, useState } from "react";
import { AppUser } from "../types/User";
import { getUsers } from "../firebase/getAllUsers";

type UsersContextType = {
  users: AppUser[];
  activeUser: AppUser;
  setActiveUser: (user: AppUser) => void;
  loading: boolean;
};

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export function UsersProvider({ children }: any) {
  const [users, setUsers] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeUser, setActiveUser] = useState<AppUser>();

  //users listana 0 = coach (Veikko Valmentaja)
  //1= user (Pentti Penkkaaja)
  //2= user (Jenni Jumppanen)
  useEffect(() => {
    async function load() {
      const data = await getUsers();
      setUsers(data);
      setActiveUser(data[0]);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <UsersContext.Provider
      value={{ users, activeUser, setActiveUser, loading }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers must be used inside UsersProvider");
  }
  return context;
}
