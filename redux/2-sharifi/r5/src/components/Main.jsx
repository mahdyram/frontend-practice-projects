import { useDispatch, useSelector } from "react-redux";
import { apiAction } from "../redux/actions";

export default function Main() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state);

  return (
    <div>
      <h1>Middleware-thunk</h1>
      <hr className="hr1" />

      <button onClick={() => dispatch(apiAction())}>
        click to send request
      </button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.slip && <p>Advice: {data.slip.advice}</p>}
    </div>
  );
}
