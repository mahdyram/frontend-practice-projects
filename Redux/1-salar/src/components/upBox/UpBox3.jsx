import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../../redux/counterSlice";

export default function UpBox3() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  // console.log(counter);

  return (
    <div className="upbox3">
      <h5>UpBox3</h5>
      <p>{counter.counter.value}</p>

      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        -1
      </button>

      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        +1
      </button>

      <button
        onClick={() => dispatch(counterSlice.actions.decrementByAmount(5))}
      >
        -5
      </button>

      <button
        onClick={() =>
          dispatch(counterSlice.actions.incrementByAmount({ amount: 10 }))
        }
      >
        +10
      </button>
    </div>
  );
}
