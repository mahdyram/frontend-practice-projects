import { useReducer } from "react";

const initialCount = { count: 0 };

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, initialCount);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>0</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <hr className="hr1" />
    </div>
  );
}
