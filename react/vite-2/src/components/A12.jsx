import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

export default function A12() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>with Reducer</h2>
      <button onClick={() => dispatch({ type: "decrease" })}>
        Click to Decrease
      </button>
      <button onClick={() => dispatch({ type: "increase" })}>
        Click to Increase
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>
        Click to Reset
      </button>
      <p>You clicked {count} times</p>
      <hr className="hr1" />
    </div>
  );
}
