import { useReducer } from "react";

const initialState = {
  name: "",
  age: 0,
  city: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      // payload is contain { field, value }
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "RESET":
      return initialState;
    case "INCREMENT_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    default:
      return state;
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Form Example</h2>

      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            payload: { field: "name", value: e.target.value },
          })
        }
      />
      <br />
      <br />

      <input
        type="number"
        placeholder="Age"
        value={state.age}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            payload: { field: "age", value: Number(e.target.value) },
          })
        }
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="City"
        value={state.city}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            payload: { field: "city", value: e.target.value },
          })
        }
      />
      <br />
      <br />

      <button onClick={() => dispatch({ type: "INCREMENT_AGE" })}>
        Increment Age
      </button>

      <button
        onClick={() => dispatch({ type: "RESET" })}
        style={{ marginLeft: "10px" }}
      >
        Reset Form
      </button>

      <h3>Current State:</h3>
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
      <p>City: {state.city}</p>
    </div>
  );
}
