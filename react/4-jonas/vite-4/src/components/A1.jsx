import { useEffect } from "react";
import { useState } from "react";

export default function A1() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  // async function getAdvice() {
  //   try {
  //     const res = await fetch("https://api.adviceslip.com/advice");
  //     const data = await res.json();
  //     setAdvice(data.slip.advice);
  //     setCount((c) => c + 1);
  //   } catch (err) {
  //     console.error("Error fetching advice:", err);
  //   }
  // }

  // async function getAdvice() {
  //   try {
  //     const res = await fetch("https://api.adviceslip.com/advice");
  //     if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  //     const data = await res.json();
  //     setAdvice(data.slip.advice);
  //     setCount((c) => c + 1);
  //   } catch (err) {
  //     console.error("Failed to fetch advice:", err);
  //   }
  // }

  // useEffect(() => getAdvice(), []);  =>  error

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h2>do you want a advice?</h2>
      <h3 style={{ color: "green" }}>{advice}</h3>
      <button onClick={getAdvice}> Get advice </button>

      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <>
      <p>
        you have read <strong>{props.count}</strong> pieces of apvice
      </p>
      <hr className="hr1" />
    </>
  );
}
