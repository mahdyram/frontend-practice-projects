import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function A1() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get(
        `https://api.adviceslip.com/advice?timestamp=${Date.now()}`
      );

      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    } catch (err) {
      setError("Failed to fetch advice 😢");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // useEffect(() => getAdvice(), []); // =>  error
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h2>do you want a advice?</h2>

      <Message count={count} />

      <button onClick={getAdvice} disabled={loading}>
        {loading ? "Loading..." : "Get advice"}
      </button>

      <h3 style={{ color: error ? "red" : "green" }}>
        {error || (loading ? "....." : advice)}
      </h3>

      <hr className="hr1"/>
    </div>
  );
}

function Message(props) {
  return (
    <>
      <p>
        you have read <strong>{props.count}</strong> pieces of advice
      </p>
    </>
  );
}
