import React from 'react';
import { ExplanationProps } from './quizTypings';

const Explanation: React.FC<ExplanationProps> = ({ explanation, showExplanation}) => {
    console.log("Explanation", explanation, showExplanation);
    // hide the explanation below out of view then slide it up if showExplanation is true slide it up
    const style = {
        transform: showExplanation ? "translateY(-100%)" : "translateY(20%)"
    }
    return (
        <div style={style} id="explanation">
            {explanation}
        </div>
    );
};

export default Explanation;