// Define the initial state
export const initialCounterState = {
    count: 0,
};

// Define the reducer
export const counterReducer = (
    state: typeof initialCounterState,
    action: { type: string }
) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        case "RESET":
            return initialCounterState;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
