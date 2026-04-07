export type SessionStatus = "completed" | "upcoming";
export type ExerciseStatus = "completed" | "upcoming";

export type TrainingSession = {
  userId: string;
  sessionId: string;
  title: string;
  description: string;
  status: SessionStatus;
  exercises: SessionExercise[];
};

export type SessionExercise = {
  exerciseId: string;
  title: string;
  description: string;
  status: ExerciseStatus;
};

export type UserComment = {
  userCommentId: string;
  comment: string;
  exerciseId: string;
  userId: string;
};
