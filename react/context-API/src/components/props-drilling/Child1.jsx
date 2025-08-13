import GrandChild1 from "./GrandChild1";

export default function Child1({ isLogin1, browser1 }) {
  return (
    <div>
      <h3>Child-1</h3>
      <hr />
      <GrandChild1 isLogin1={isLogin1} browser1={browser1} />
    </div>
  );
}
