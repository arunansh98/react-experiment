import { useReducer } from "react";

export default function Count() {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        throw new Error("Unknown action");
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, { count: 0 });

  return (
    <div className="flex flex-col">
      <div>Count is {state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
