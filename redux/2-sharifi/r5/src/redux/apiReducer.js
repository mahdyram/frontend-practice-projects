const initialState = { isLoading: false, data: [], error: null };

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case "API_REQUEST":
      return { ...state, isLoading: true };

    case "API_SUCCESS":
      return { ...state, isLoading: false, data: action.payload };

    case "API_FAILURE":
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}
