import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("july 14 2023");
  date.setDate(date.getDate() + count);
  return (
    <div className="container">
      <div className="top-wrapper">
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div className="top-wrapper">
        <button onClick={() => setCount((count) => count - 1 * step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((count) => count + 1 * step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today `
            : `${count} days ago was `}

        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
