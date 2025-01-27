import React from 'react';
import { ExplanationProps } from './quizTypings';

const Explanation: React.FC<ExplanationProps> = ({ explanation, showExplanation}) => {
    // console.log("Explanation", explanation, showExplanation);
    const style = {
        transform: showExplanation ? "translateY(-105%)" : "translateY(20%)"
    }
    return (
        <div style={style} id="explanation">
            {explanation}
        </div>
    );
};

export default Explanation;