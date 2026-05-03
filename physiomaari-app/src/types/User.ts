export type UserRole = "coach" | "user";

export type AppUser = {
  id: string; //tulee automaattisesti firebasesta
  lastName: string;
  firstName: string;
  email: string;
  username: string;
  passwordHashed?: string; //tässä vaiheessa ei pakollinen
  role: UserRole;
};
