export type UserRole = "coach" | "user";

export type AppUser = {
  appUserId?: string; //tulee automaattisesti firebasesta
  lastName: string;
  firstName: string;
  email: string;
  username: string;
  passwordHashed?: string;
  role: UserRole;
};
