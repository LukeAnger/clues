import { BASE_URL } from "./apiConfig"
export const getTopicMapping = async (courseId: string) => {
    const response = await fetch(`${BASE_URL}adaptive_learning/get_topic_mapping`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ course_id: courseId }),
    });
    return response.json();
}