import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { getQuestions } from "../../utils/getQuestions";
import { getTopicMapping } from "../../utils/getTopicMapping";
import { getNextConcepts } from "../../utils/getNextConcepts";

// Define the shape of the context
interface StoreContextType {
    state: {
      topicMapping: Record<string, string[]>;
      nextConcepts: Record<string, number>;
      questions: any[];
      isLoaded: boolean;
    };
  }
  
  // Create the StoreContext
  const StoreContext = createContext<StoreContextType | undefined>(undefined);
  
  // Custom hook to access the store
  export const useStore = (): StoreContextType => {
    const context = useContext(StoreContext);
    if (!context) {
      throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
  };
  
  // StoreProvider component
  export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
    // Single state object for all fetched data
    const [state, setState] = useState<{
      topicMapping: Record<string, string[]>;
      nextConcepts: Record<string, number>;
      questions: any[];
      isLoaded: boolean;
    }>({
      topicMapping: {},
      nextConcepts: {},
      questions: [],
      isLoaded: false,
    });
  
    useEffect(() => {
      const initializeData = async () => {
        try {
          // Fetch topic mapping
          const topicMappingResponse = await getTopicMapping("37");
  
          // Fetch next concepts
          const nextConceptsResponse = await getNextConcepts("37", "9");
  
          // Fetch questions using next concepts
          const selectedConcepts = Object.keys(nextConceptsResponse.next_concepts).slice(0, 5);
          const questionsResponse = await getQuestions({
            course_id: "37",
            user_id: "9",
            question_count: 10,
            selected_concepts: selectedConcepts,
          });
  
          // Update state atomically
          setState({
            topicMapping: topicMappingResponse.topic_mapping,
            nextConcepts: nextConceptsResponse.next_concepts,
            questions: questionsResponse.questions,
            isLoaded: true,
          });
        } catch (error) {
          console.error("Error initializing data:", error);
        }
      };
  
      initializeData();
    }, []);
  
    return (
      <StoreContext.Provider value={{ state }}>
        {children}
      </StoreContext.Provider>
    );
  };
  
  export default StoreProvider;