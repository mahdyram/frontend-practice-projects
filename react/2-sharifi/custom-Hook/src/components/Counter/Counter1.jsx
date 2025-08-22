import useCounter from "../hooks/useCounter";

export default function Counter1() {
  let test = useCounter();
  console.log(test); // {count: 0, increase: ƒ, decrease: ƒ}

  let { count, increase, decrease } = test;

  return (
    <div>
      <h2>Counter 1</h2>
      <h3>{count}</h3>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
      <hr />
    </div>
  );
}
