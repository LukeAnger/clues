// https://api.devo.learningclues.com/adaptive_learning/get_questions
// {
//     "course_id": "37",
//     "user_id": "9",
//     "question_count": 5,
//     "selected_concepts": [
//         "Decision Trees",
//         "K-Nearest Neighbors",
//         "Logistic Regression",
//         "Support Vector Machines",
//         "Feature Scaling"
//     ]
// }
// default courseId to 37 and userId to 9
// should be a post with the above body
import { BASE_URL } from "./apiConfig";

export const getQuestions = async (body: any) => {
    const response = await fetch(`${BASE_URL}adaptive_learning/get_questions`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    return response.json();
};