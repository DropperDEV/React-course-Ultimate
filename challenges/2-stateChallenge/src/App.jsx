import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("july 14 2023");
  date.setDate(date.getDate() + count);
  function handleClickReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="container">
      <div className="top-wrapper">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <label htmlFor="range">{step}</label>
      </div>
      <div className="top-wrapper">
        <button
          onClick={() => setCount((count) => count - 1 * step)}
          className="button"
        >
          ➖
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) =>
            setCount(
              Number(e.target.value) >= 0
                ? parseInt(e.target.value)
                : -parseInt(e.target.value)
            )
          }
        />
        <button
          onClick={() => setCount((count) => count + 1 * step)}
          className="button"
        >
          ➕
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today `
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <button className="button" onClick={handleClickReset}>
        Reset
      </button>
    </div>
  );
}
