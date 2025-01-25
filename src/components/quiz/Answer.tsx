import React from "react";
import { IonModal, IonButton } from "@ionic/react";
import { AnswerProps } from "./quizTypings";
import Explanation from "./Explanation";
const Answer: React.FC<AnswerProps> = ({answer, handleSelectAnswer}) => {
    const { letter, option, selected, correct } = answer;
    // console.log("Answer: ", answer);
    const correctStyle = { backgroundColor: "green" };
    const incorrectStyle = { backgroundColor: "red" };

    const style = {};

    if (selected) {
        if (correct) {
            Object.assign(style, correctStyle);
        } else {
            Object.assign(style, incorrectStyle);
        }
    }
    return (
        <div style={style} className="answer" onClick={() => handleSelectAnswer(letter)}>
            {option}
        </div>
    );
};

export default Answer;