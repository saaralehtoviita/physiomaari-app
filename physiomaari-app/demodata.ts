import { AppUser } from "./src/types/User";

export const demoUsers: AppUser[] = [
  {
    appUserId: 1,
    lastName: "Korhonen",
    firstName: "Matti",
    email: "matti.korhonen@example.com",
    username: "mattik",
    passwordHashed: "hashed_password_1",
    role: "user",
  },
  {
    appUserId: 2,
    lastName: "Niemi",
    firstName: "Anna",
    email: "anna.niemi@example.com",
    username: "coachanna",
    passwordHashed: "hashed_password_4",
    role: "coach",
  },
  {
    appUserId: 3,
    lastName: "Laine",
    firstName: "Jukka",
    email: "jukka.laine@example.com",
    username: "jukkal",
    passwordHashed: "hashed_password_3",
    role: "user",
  },
];
