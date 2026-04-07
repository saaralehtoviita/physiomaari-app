import { createContext, useContext } from "react";
import { AppUser } from "../types/User";

type UserContextType = {
  user: AppUser | null;
  setUser?: (user: AppUser) => void;
};

const UserContext = createContext<UserContextType>({ user: null });

export const useUser = () => useContext(UserContext);

export default UserContext;
