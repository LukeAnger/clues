import React from "react";
import { AnswerProps } from "./quizTypings";

const Answer: React.FC<AnswerProps> = ({ answer, handleSelectAnswer }) => {
  const { letter, option, selected, correct } = answer;
  const disabled = selected ? "none" : "auto";

  const correctStyle = { boxShadow: "0px 0px 5px 2px green", pointerEvents: disabled };
  const incorrectStyle = { boxShadow: "0px 0px 5px 2px red", pointerEvents: disabled };
  const disabledStyle = { pointerEvents: disabled };

  const style = {};
  if (selected) {
    if (correct) {
      Object.assign(style, correctStyle);
    } else {
      Object.assign(style, incorrectStyle);
    }
  } else {
    Object.assign(style, disabledStyle);
  }

  return (
    <div style={style} className="answer-container">
      <div className="answer" onClick={() => handleSelectAnswer(letter)}>
        {option}
      </div>
    </div>
  );
};

export default Answer;
