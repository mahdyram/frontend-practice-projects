import useCounter from "../hooks/useCounter";

export default function Counter2() {
  let { count, increase, decrease } = useCounter();

  return (
    <div>
      <h2>Counter 2</h2>
      <h3>{count}</h3>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
      <hr className="hr1" />
    </div>
  );
}
