import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    { todoName: "watch tv", id: uuidv4() },
    { todoName: "study book", id: uuidv4() },
  ],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { todoName: action.payload, id: uuidv4() }],
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}
