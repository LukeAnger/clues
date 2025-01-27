import React, { useEffect, useState } from "react";
import { useStore } from "../context/store";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import './Quiz.css';
import Header from "../components/header/Header";
import QuizList from "../components/quiz/QuizList";
import { HeaderProps } from "../components/header/headerTypings";



const Quiz: React.FC = () => {
  const { state } = useStore();
  // console.log("Quiz FLASHCARD STATE STORE: ", state);
  const [progressStatus, setProgressStatus] = useState(0);

  const handleIncrementProgress = () => {
    setProgressStatus((prev) => prev + 1);
  };



  return (
    <IonPage id="quiz-page" >
      <Header leftType={"backButton"} midType={"progressBar"} rightType={"none"} progress={progressStatus * 10} />
      <QuizList questions={state.questions} handleIncrementProgress={handleIncrementProgress} />
    </IonPage>
  );
};

export default Quiz;
