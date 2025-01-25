import { BASE_URL } from "./apiConfig"
export const getNextConcepts = async (courseId: string, userId: string) => {
    const response = await fetch(`${BASE_URL}adaptive_learning/get_next_concepts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ course_id: courseId, user_id: userId }),
    });
    return response.json();
}