import { useState, useEffect } from "react";
import { IonSpinner } from "@ionic/react";
import { useStore } from "../context/store";
import { captilizeEachWord, floatToPercent } from "../utils/index.js";

const SuggestedReview = () => {
    const { state } = useStore();
    let { nextConcepts } = state;
    const [isLoaded, setIsLoaded] = useState(false);
    console.log("NEXT CONCEPTS: ", Object.keys(nextConcepts));
    const suggestedConcepts: [string, number][] = Object.keys(nextConcepts)
        .filter((concept) => {
        const val = Number(nextConcepts[concept]);
        return val < 0.5;
        })
        .map((concept) => [concept, Number(nextConcepts[concept])]);
    
    // These funcs are for modifying css for the value strength. Not needed if we only show "Weak" concepts
    // const getColor = (value: number) => {
    //     if (value < 0.5) return "red";
    //     else if (value < 0.7) return "yellow";
    //     else return "green";
    // }
    // const valStrength = (val: number) => <div style={{ color: getColor(val), textShadow: "0px 0px 1px black" }}>
    //     {val > 0.7 ? "Strong" : val > 0.5 ? "Medium" : "Weak"}
    // </div>

    //right now there is always suggested in testing so this only shows on loading. need to implement loading specific logic and error handling
    if (suggestedConcepts.length === 0) return (
        <IonSpinner name="bubbles" />
    );

    return (
        <div id="suggested-review-container" style={{overflow: "auto"}}>
            <div className="suggestion-header">Suggested Concepts</div>
            {suggestedConcepts.map((concept, index) => (
                <div key={index} className="suggestion">
                    <div className="suggestion-name">{captilizeEachWord(concept[0])}</div>
                    <div className="suggestion-value">{floatToPercent(concept[1])}%</div>
                </div>
            ))}
        </div>
    );
};

export default SuggestedReview;