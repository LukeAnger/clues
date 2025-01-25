export type CounterActions =
    | { type: "INCREMENT" }
    | { type: "DECREMENT" }
    | { type: "RESET" };

export const increment = (): CounterActions => ({ type: "INCREMENT" });
export const decrement = (): CounterActions => ({ type: "DECREMENT" });
export const reset = (): CounterActions => ({ type: "RESET" });
