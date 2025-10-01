export function addTodo(todoName) {
  return { type: "ADD_TODO", payload: todoName };
}

export function removeTodo(id) {
  return { type: "REMOVE_TODO", payload: id };
}
