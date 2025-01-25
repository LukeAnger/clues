import React, { useEffect, useState } from "react";
import { useStore } from "../context/store";
import {
  setCategory,
  nextCard,
  reset,
} from "../context/actions/flashcardActions";
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
import QuizList from "../components/quiz/QuizList";
import Header from "../components/header/Header";


const Quiz: React.FC = () => {
  const { state } = useStore();
  console.log("TAB 3 FLASHCARE STATE STORE: ", state);



  return (
    <IonPage id="quiz-page" >
      <Header showBack={true} />
      <QuizList questions={state.questions} />
    </IonPage>
  );
};

export default Quiz;
