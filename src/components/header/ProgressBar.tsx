import React from 'react';
import { ProgressBarProps } from '../quiz/quizTypings';

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const style = {
        transform: `translateX(-${100 - progress}%`
    }
    return (
        <div className="progress-bar">
            <div className="progress-bar-fill" style={style}></div>
        </div>
    );
};

export default ProgressBar;