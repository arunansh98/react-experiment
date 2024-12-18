import { useMemo, useReducer } from "react";

export default function Count() {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      case "increment-new-count":
        return { ...state, newCount: state.newCount + 1 };
      default:
        throw new Error("Unknown action");
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, {
    count: 0,
    newCount: 0,
  });

  const getFactorial = (num) => {
    console.log("calculated!");

    let fact = 1;
    while (num >= 1) {
      fact = fact * num;
      num = num - 1;
    }
    return fact;
  };

  const factorial = useMemo(() => getFactorial(state.count), [state.count]); // calculates factorial only when state.count changes

  // const factorial = useMemo(() => getFactorial(state.count)); // calculates factorial everytime even if state.count is same, and state.newCount is only updated

  // const factorial = getFactorial(state.count); // calculates factorial everytime even if state.count is same, and state.newCount is only updated

  return (
    <div className="flex flex-col">
      <div>Count is {state.count}</div>
      <div>New Count is {state.newCount}</div>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment Count
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement Count
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset Count</button>
      <button onClick={() => dispatch({ type: "increment-new-count" })}>
        Increment New Count
      </button>
      <div>Factorial is {factorial}</div>
    </div>
  );
}
