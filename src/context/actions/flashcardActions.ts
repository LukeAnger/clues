export type FlashcardActions =
  | { type: "SET_CATEGORY"; payload: string }
  | { type: "NEXT_CARD"; payload: boolean } // `payload: boolean` indicates if the answer was correct
  | { type: "RESET" }
  | { type: "SET_QUESTIONS"; payload: any[] }
  | { type: "SET_TOPIC_MAPPING"; payload: Record<string, string[]> }
  | { type: "SET_NEXT_CONCEPTS"; payload: Record<string, number> };

export const setCategory = (categoryName: string): FlashcardActions => ({
  type: "SET_CATEGORY",
  payload: categoryName,
});

export const nextCard = (isCorrect: boolean): FlashcardActions => ({
  type: "NEXT_CARD",
  payload: isCorrect,
});

export const reset = (): FlashcardActions => ({
  type: "RESET",
});

export const setQuestions = (questions: any[]): FlashcardActions => ({
  type: "SET_QUESTIONS",
  payload: questions,
});

export const setTopicMapping = (mapping: Record<string, string[]>): FlashcardActions => ({
  type: "SET_TOPIC_MAPPING",
  payload: mapping,
});

export const setNextConcepts = (concepts: Record<string, number>): FlashcardActions => ({
  type: "SET_NEXT_CONCEPTS",
  payload: concepts,
});
