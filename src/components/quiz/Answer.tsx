import React from "react";
import { IonModal, IonButton } from "@ionic/react";
import { AnswerProps } from "./quizTypings";
import Explanation from "./Explanation";
const Answer: React.FC<AnswerProps> = ({answer, handleSelectAnswer, currSelectedAnswer}) => {
    const { letter, option, selected, correct } = answer;
    const disabled = currSelectedAnswer !== "" ? "none" : "auto";
    // console.log("Answer: ", answer);
    const correctStyle = { boxShadow: "0px 0px 5px 2px green", pointerEvents: disabled };
    const incorrectStyle = { boxShadow: "0px 0px 5px 2px red", pointerEvents: disabled };
    const disabledStyle = { pointerEvents: disabled };

    const style = {};
    if (currSelectedAnswer !== "") {
        console.log("Selected Answer: ", currSelectedAnswer);
        if (selected && !correct) {
            Object.assign(style, incorrectStyle);
        } else if (correct) {
            Object.assign(style, correctStyle);
        } else {
            console.log("Not selected, not correct");
            Object.assign(style, disabledStyle);
        }
    }
    return (
        <div style={style} className="answer-container">
            <div  className="answer" onClick={() => handleSelectAnswer(letter)}>
                {option}
            </div>

        </div>
    );
};

export default Answer;