import UpBox1 from "./components/upBox/UpBox1";
import DownBox1 from "./components/downBox/DownBox1";
import UserChildren from "./components/UserChildren";

function App() {
  return (
    <>
      <h1>Home</h1>
      <UpBox1 />
      <hr />
      <DownBox1 />
      <hr className="hr1" />
      <UserChildren />
    </>
  );
}

export default App;
