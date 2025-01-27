import React from "react";
import { IonItem, IonLabel, IonCheckbox, IonCardContent } from "@ionic/react";
import { QuizListItemProps, AnswerKey } from "./quizTypings";
import Answer from "./Answer";
import Explanation from "./Explanation";
import Hint from "./Hint";

const QuizListItem: React.FC<QuizListItemProps> = ({ question, handleSelectAnswer, currSelectedAnswer, showExplanation, handleShowExplanation }) => {
    // console.log("QuizListItem Question: ", question);
    const handleIsCorrect = (answer: string) => {
        if (answer === question["Correct Answer"]) {
            return true;
        }
        return false;
    }

    return (
        <IonCardContent id="quiz-card-content" >
            
            <div id="question">
                {question.Question}
            </div>

            
            {(["A", "B", "C", "D"] as AnswerKey[]).map((letter) => (
                <Answer
                    key={letter}
                    answer={{
                        letter,
                        option: question[letter],
                        selected: currSelectedAnswer === letter,
                        correct: handleIsCorrect(letter),
                    }}
                    handleSelectAnswer={handleSelectAnswer}
                    currSelectedAnswer={currSelectedAnswer}
                />
            ))}
                    
        </IonCardContent>
    );
};

export default QuizListItem;
