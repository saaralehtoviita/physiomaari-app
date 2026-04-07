export type UserRole = "coach" | "user";

export type AppUser = {
  appUserId: number;
  lastName: string;
  firstName: string;
  email: string;
  username: string;
  passwordHashed: string;
  role: UserRole;
};
