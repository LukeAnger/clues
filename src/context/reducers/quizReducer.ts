// quizReducer.ts

import { QuizAction } from "../actions/quizActions";

// Define the state structure
export interface QuizState {
  currIndex: number;
  currSelectedAnswer: string;
  showExplanation: boolean;
  currExplanation: string;
  showHint: boolean;
  progress: number;
  questions: any[]; // Replace `any[]` with your question type
}

// Initial state
export const initialQuizState: QuizState = {
  currIndex: 0,
  currSelectedAnswer: "",
  showExplanation: false,
  currExplanation: "",
  showHint: false,
  progress: 0,
  questions: [], // Initialize as an empty array
};

// Reducer function
export const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case "NEXT_QUESTION":
      return {
        ...state,
        currIndex: state.currIndex + 1,
        currSelectedAnswer: "",
        currExplanation: "",
        showExplanation: false,
        showHint: false,
      };
    case "PREV_QUESTION":
      return {
        ...state,
        currIndex: Math.max(state.currIndex - 1, 0),
      };
    case "SELECT_ANSWER":
      return {
        ...state,
        currSelectedAnswer: action.payload.answer,
        currExplanation: action.payload.explanation,
      };
    case "TOGGLE_EXPLANATION":
      return {
        ...state,
        showExplanation: !state.showExplanation,
        showHint: false,
      };
    case "TOGGLE_HINT":
      return {
        ...state,
        showHint: !state.showHint,
        showExplanation: false,
      };
    case "INCREMENT_PROGRESS":
      return {
        ...state,
        progress: state.progress + 1,
      };
    default:
      return state;
  }
};
