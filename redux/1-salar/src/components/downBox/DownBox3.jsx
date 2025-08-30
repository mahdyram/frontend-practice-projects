import { useSelector } from "react-redux";

export default function DownBox3() {
  const counter = useSelector((state) => state.counter.value);

  return (
    <div className="downbox3">
      <h5>DownBox3</h5>
      <p>{counter}</p>
    </div>
  );
}
