export default function GrandChild1({ isLogin1, browser1 }) {
  return (
    <div>
      <h4>GrandChild-1</h4>
      <h5 style={{ color: "blue" }}>your browser is {browser1}</h5>
      <h5 style={{ color: isLogin1 ? "green" : "red" }}>
        {isLogin1 ? "you loged in" : "please login"}
      </h5>
    </div>
  );
}
