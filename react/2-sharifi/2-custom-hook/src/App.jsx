import Counter1 from "./components/Counter/Counter1";
import Counter2 from "./components/Counter/Counter2";
import Fetch1 from "./components/Fetch/Fetch1";
import Fetch2 from "./components/Fetch/Fetch2";

function App() {
  return (
    <>
      <h1>Custom Hook</h1>
      <hr className="hr1" />
      <Counter1 />
      <Counter2 />
      <Fetch1 />
      <Fetch2 />
    </>
  );
}

export default App;
