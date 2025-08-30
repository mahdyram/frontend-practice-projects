import axios from "axios";

export function apiAction() {
  return async (dispatch) => {
    dispatch({ type: "API_REQUEST" });

    try {
      const advice = await axios.get("https://api.adviceslip.com/advice");
      dispatch({ type: "API_SUCCESS", payload: advice.data });
    } catch (err) {
      dispatch({ type: "API_FAILURE", payload: err.message });
      console.error("Axios request failed:", err);
    }
  };
}
