export type SessionStatus = "completed" | "upcoming";
export type ExerciseStatus = "completed" | "upcoming";

export type TrainingSession = {
  userId?: string; //muutetaan pakolliseksi, kun kanta ja testikäyttäjät käytössä
  id: string;
  title: string;
  description: string;
  datePlanned: string;
  dateCompleted?: string; //ei pakollinen, koska aluksi null
  status: SessionStatus;
  exercises?: SessionExercise[];
};

export type SessionExercise = {
  id: string;
  title: string;
  description: string;
  status?: ExerciseStatus;
  videoUrl?: string; //valmentajan lisäämä youtube-linkki, valinnainen
};

export type UserComment = {
  id: string;
  comment: string;
  exerciseId: string;
  userId: string;
  commentWritten?: string; //aluksi null, tallennetaan vasta kun kommentti luodaan
};
