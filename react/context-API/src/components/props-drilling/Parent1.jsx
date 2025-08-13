import Child1 from "./Child1";

export default function Parent1({ isLogin1, browser1 }) {
  return (
    <div>
      <h2>Parent-1</h2>
      <hr />
      <Child1 isLogin1={isLogin1} browser1={browser1} />
    </div>
  );
}
