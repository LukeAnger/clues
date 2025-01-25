import React from 'react';
import { HintProps } from './quizTypings';

const Hint: React.FC<HintProps> = ({hint, showHint}) => {
    console.log("Hint", hint, showHint);
    const style = {
        transform: showHint ? "translateY(-110%)" : "translateY(10%)"
    }
    return (
        <div style={style} id="hint">
            {hint}
        </div>
    );
};

export default Hint;