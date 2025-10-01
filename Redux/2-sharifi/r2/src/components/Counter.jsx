import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  decrementByAmount,
  incrementByAmount,
} from "../redux/actions";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter (old method)</h1>
      <h2>{counter}</h2>

      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <br />

      <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
    </div>
  );
}
