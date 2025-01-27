// quizStore.tsx

import React, { createContext, useContext, useReducer } from "react";
import { QuizAction } from "../actions/quizActions";
import { quizReducer, initialQuizState, QuizState } from "../reducers/quizReducer";

// Context value type
interface QuizContextValue {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
}

// Create the context
const QuizContext = createContext<QuizContextValue | null>(null);

// Custom hook for accessing the QuizContext
export const useQuiz = (): QuizContextValue => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

// Provider component
export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
