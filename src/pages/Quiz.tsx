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
import Header from "../components/header/Header";
import QuizList from "../components/quiz/QuizList";
import { HeaderProps } from "../components/header/headerTypings";



const Quiz: React.FC = () => {
  const { state } = useStore();
  // console.log("Quiz FLASHCARD STATE STORE: ", state);



  return (
    <IonPage id="quiz-page" >
      <Header leftType={"backButton"} midType={"logo"} rightType={"none"} />
      <QuizList questions={state.questions} />
    </IonPage>
  );
};

export default Quiz;
