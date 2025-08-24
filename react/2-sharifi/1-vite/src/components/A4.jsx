import { useState } from "react";

export default function A4() {
  let contents = [
    "Lorem1 ipsum dolor, sit amet consectetur adipisicing elit.Dolor, beatae eveniet facilis sed explicabo iure totam rerum accusantium. Architecto, laborum.",
    "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Odit soluta nemo, inventore vitae sed debitis in alias quis. Aut, unde?",
    "Lorem3 ipsum dolor sit amet, consectetur adipisicing elit. Eveniet harum rem nostrum, vero distinctio fuga dignissimos. Repellat ab sequi sit.",
    "Lorem4 ipsum dolor sit amet consectetur adipisicing elit. Cum ducimus voluptatem velit suscipit laudantium totam quos sapiente rem quidem asperiores.",
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((p) => (p < contents.length - 1 ? p + 1 : p));
  };

  const handlePrev = () => {
    setIndex((p) => (p > 0 ? p - 1 : p));
  };

  return (
    <div>
      <button onClick={handlePrev} disabled={index === 0}>
        prev content
      </button>

      <button onClick={handleNext} disabled={index === contents.length - 1}>
        next content
      </button>

      <p className="content-box">{contents[index]}</p>
      <hr className="hr1" />
    </div>
  );
}
