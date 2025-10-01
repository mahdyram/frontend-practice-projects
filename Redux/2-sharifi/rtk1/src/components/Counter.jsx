import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../redux/counterSlice";

export default function Counter() {
  // const state = useSelector((state) => state);
  // console.log(state);
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>start RTK</h1>
      <hr className="hr1" />  

      <h2>{counter}</h2>

      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        -
      </button>

      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        +
      </button>
    </div>
  );
}
