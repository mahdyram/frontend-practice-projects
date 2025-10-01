const initialState = { counter: 0 };

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };

    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };

    case "DECREMENT_BY_AMOUNT":
      return { ...state, counter: state.counter - action.payload };

    case "INCREMENT_BY_AMOUNT":
      return { ...state, counter: state.counter + action.payload };

    default:
      return state;
  }
}
