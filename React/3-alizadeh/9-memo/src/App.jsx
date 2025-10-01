import Parent from "./components/1-withoutMemo/Parent";
import Parent2 from "./components/2-withMemo/Parent2";
import Primitive from "./components/3-memoWithPrimitive/Primitive";
import Reference from "./components/4-memoWithReference/Reference";
import UseMemo from "./components/5-referenceWithUseMemo/UseMemo";

function App() {
  return (
    <>
      <Parent />
      <Parent2 />
      <Primitive />
      <Reference />
      <UseMemo />
    </>
  );
}

export default App;
