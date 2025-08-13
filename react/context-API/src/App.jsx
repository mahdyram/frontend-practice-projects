import Parent1 from "./components/props-drilling/Parent1";
import Parent2 from "./components/context-api/Parent2";
import { AppDataProvider } from "./components/context-api/NewContext";

function App() {
  let isLogin1 = true;
  let browser1 = "Edge";

  return (
    <div>
      <h1>with normal props:</h1>
      <hr />
      <Parent1 isLogin1={isLogin1} browser1={browser1} />
      <hr className="hr1" />

      <AppDataProvider>
        <h1>with context api:</h1>
        <hr />
        <Parent2 />
      </AppDataProvider>
    </div>
  );
}

export default App;
