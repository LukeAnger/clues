import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { flashcardReducer, initialFlashcardState } from "../reducers/flashcardReducer";
import { FlashcardActions } from "../actions/flashcardActions";
import { getQuestions } from "../../utils/getQuestions";
import { getTopicMapping } from "../../utils/getTopicMapping";
import { getNextConcepts } from "../../utils/getNextConcepts";

interface FlashcardStoreContextType {
  state: typeof initialFlashcardState;
  dispatch: React.Dispatch<FlashcardActions>;
}

const FlashcardStoreContext = createContext<FlashcardStoreContextType | undefined>(
  undefined
);

export const useFlashcardStore = (): FlashcardStoreContextType => {
  const context = useContext(FlashcardStoreContext);
  if (!context) {
    throw new Error("useFlashcardStore must be used within a FlashcardStoreProvider");
  }
  return context;
};

interface FlashcardStoreProviderProps {
  children: ReactNode;
}

export const FlashcardStoreProvider: React.FC<FlashcardStoreProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(flashcardReducer, initialFlashcardState);

  return (
    <FlashcardStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </FlashcardStoreContext.Provider>
  );
};


