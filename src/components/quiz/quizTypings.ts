export interface Question {
  Question: string;
  A: string;
  B: string;
  C: string;
  D: string;
  ["Correct Answer"]: string;
  ["Moment ID"]: number;
  ["Lecture ID"]: number;
  Topics: string[];
  ["Question ID"]: string;
  Reported: boolean;
  Hint: string;
  ["Explanation for Options"]: ExplanationForOptions;
  ["Match Count"]: number;
}

export type AnswerKey = "A" | "B" | "C" | "D";

export interface ExplanationForOptions {
  [key: string]: string;
}

export interface Answer {
  letter: string;
  option: string;
  selected: boolean;
  correct: boolean;
}

export interface ExplanationProps {
  explanation: string;
  showExplanation: boolean;
}

export interface HintProps {
  showHint: boolean;
  hint: string;
}

export interface QuizListProps {
  questions: Question[];
  handleIncrementProgress: () => void;
}

export interface QuizListItemProps {
  question: Question;
  handleSelectAnswer: (answer: string) => void;
  currSelectedAnswer: string;
  showExplanation: boolean;
  showHint: boolean;
  handleShowExplanation: () => void;
  handleShowHint: () => void;
}

export interface AnswerProps {
  answer: Answer;
  handleSelectAnswer: (answer: string) => void;
  currSelectedAnswer: string;
}

export interface ProgressBarProps {
  progress: number;
}

export interface CustomizQuizProps {
  handleShowCustomizeQuiz: (show: boolean) => void;
}