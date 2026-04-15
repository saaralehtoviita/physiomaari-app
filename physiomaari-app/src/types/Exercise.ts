export type SessionStatus = "completed" | "upcoming";
export type ExerciseStatus = "completed" | "upcoming";

export type TrainingSession = {
  userId?: number; //muutetaan pakolliseksi, kun kanta ja testikäyttäjät käytössä
  sessionId: number;
  title: string;
  description: string;
  datePlanned: string;
  status: SessionStatus;
  exercises: SessionExercise[];
};

export type SessionExercise = {
  exerciseId: number;
  title: string;
  description: string;
  status: ExerciseStatus;
  videoUrl?: string; //valmentajan lisäämä youtube-linkki, valinnainen
};

export type UserComment = {
  userCommentId: string;
  comment: string;
  exerciseId: string;
  userId: string;
};
