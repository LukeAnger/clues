// quizActions.ts

export type QuizAction =
  | { type: "NEXT_QUESTION" }
  | { type: "PREV_QUESTION" }
  | { type: "SELECT_ANSWER"; payload: { answer: string; explanation: string } }
  | { type: "TOGGLE_EXPLANATION" }
  | { type: "TOGGLE_HINT" }
  | { type: "INCREMENT_PROGRESS" };
