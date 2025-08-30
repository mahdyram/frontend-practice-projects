export default function productReducer(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];

    default:
      return state;
  }
}
