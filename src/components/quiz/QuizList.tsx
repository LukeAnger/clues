import React, { useState } from "react";
import { IonContent, IonCard, IonButton, IonToolbar, IonLoading, IonFooter, IonTitle } from "@ionic/react";
import QuizListItem from "./QuizListItem";
import Explanation from "./Explanation";
import { QuizListProps } from "./quizTypings";
import Hint from "./Hint";

const QuizList: React.FC<QuizListProps> = ({ questions }) => {
    // console.log("QuizList Questions: ", questions);
    const [currIndex, setCurrIndex] = useState(0);
    const [currSelectedAnswer, setCurrSelectedAnswer] = useState("");
    const [showExplanation, setShowExplanation] = useState(false);
    const [currExplanation, setCurrExplanation] = useState("");
    const [showHint, setShowHint] = useState(false);

    const handleNext = () => {
        if (currIndex === questions.length - 1) {
            setCurrIndex(0);
            return;
        }
        setCurrIndex((prev) => prev + 1);
        setCurrExplanation("");
        setCurrSelectedAnswer("");
        setShowHint(false);
        setShowExplanation(false);
        // unmount explanation and hint
        
    };

    const handlePrev = () => {
        if (currIndex === 0) {
            return;
        }
        setCurrIndex((prev) => prev - 1);
    };

    const handleSelectAnswer = (letter: string) => {
        setCurrSelectedAnswer(letter);
        setCurrExplanation(questions[currIndex]["Explanation for Options"][letter]);
        setShowHint(false);
    }
    
    const handleShowExplanation = () => {
        setShowExplanation(!showExplanation);
        setShowHint(false);
    }

    const handleShowHint = () => {
        setShowHint(!showHint);
        setShowExplanation(false);
    }

    if (questions.length === 0) {
        return <IonLoading>Questions not found</IonLoading>;
    }

    const currentQuestion = questions[currIndex];
    

    return (
        <>
            <div  id="quiz-content">
                <IonCard id="quiz-card" key={currIndex}>
                    <QuizListItem 
                        question={currentQuestion} 
                        handleSelectAnswer={handleSelectAnswer} 
                        currSelectedAnswer={currSelectedAnswer} 
                        showExplanation={showExplanation}
                        showHint={showHint}
                        handleShowExplanation={handleShowExplanation}
                        handleShowHint={handleShowHint}
                        />
                </IonCard>
                
                
                <Explanation explanation={currExplanation} showExplanation={showExplanation} />
                <Hint hint={currentQuestion.Hint} showHint={showHint} />
            </div>
            <IonFooter >
                <IonToolbar id="quiz-footer" >
                    {/* <IonButton disabled={currIndex === 0 ? true: false} onClick={handlePrev}>Previous</IonButton> */}
                    <IonButton className="quiz-buttons" slot="start" disabled={currSelectedAnswer !== ""} onClick={handleShowHint}>
                        Hint
                    </IonButton>
                    <IonTitle className="ion-text-center">
                        <IonButton disabled={currSelectedAnswer === ""} onClick={handleNext}>
                            Continue
                        </IonButton>

                    </IonTitle>
                    <IonButton className="quiz-buttons" slot="end" disabled={currSelectedAnswer === ""} onClick={handleShowExplanation}>
                        Explanation
                    </IonButton>
                </IonToolbar>
            </IonFooter>
        </>
    );
};

export default QuizList;
