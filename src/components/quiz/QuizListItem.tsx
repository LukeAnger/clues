import React from "react";
import { IonItem, IonLabel, IonCheckbox, IonCardContent } from "@ionic/react";
import { QuizListItemProps } from "./quizTypings";
import Answer from "./Answer";
import Explanation from "./Explanation";
import Hint from "./Hint";

const QuizListItem: React.FC<QuizListItemProps> = ({ question, handleSelectAnswer, currSelectedAnswer, showExplanation, handleShowExplanation }) => {
    console.log("QuizListItem Question: ", question);
    const handleIsCorrect = (answer: string) => {
        if (answer === question["Correct Answer"]) {
            return true;
        }
        return false;
    }

    return (
        <IonCardContent id="quiz-card-content" >
            
            <div id="question">{question.Question}</div>

            <div id="answers">
                <Answer 
                    answer={{
                        letter: "A", 
                        option: question.A, 
                        selected: currSelectedAnswer === "A" ? true : false, 
                        correct: handleIsCorrect("A")
                    }} 
                    handleSelectAnswer={handleSelectAnswer} 
                />

                <Answer 
                    
                    answer={{
                        letter: "B", 
                        option: question.B, 
                        selected: currSelectedAnswer === "B" ? true : false, 
                        correct: handleIsCorrect("B")
                    }}  
                    handleSelectAnswer={handleSelectAnswer} 
                />

                <Answer 
                    
                    answer={{

                        letter: "C", 
                        option: question.C, 
                        selected: currSelectedAnswer === "C" ? true : false, 
                        correct: handleIsCorrect("C")
                    }}  
                    handleSelectAnswer={handleSelectAnswer} 
                />

                <Answer 
                    
                    answer={{
                        letter: "D", 
                        option: question.D, 
                        selected: currSelectedAnswer === "D" ? true : false, 
                        correct: handleIsCorrect("D")
                    }}  
                    handleSelectAnswer={handleSelectAnswer} 
                />
            </div>
                    
        </IonCardContent>
    );
};

export default QuizListItem;
