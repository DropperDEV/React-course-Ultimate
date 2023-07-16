import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [previousValue, setPreviousStep] = useState(50);
  const [count, setCount] = useState(0);
  const date = new Date("july 14 2023");
  date.setDate(date.getDate() + count);

  function handleRangeChanges(event) {
    const currentStep = Number(event.target.value);
    setStep(currentStep);

    if (currentStep > previousValue) {
      setStep((step) => step + 1);
    } else if (currentStep < previousValue) {
      setStep((step) => step + 1);
      
    }
    setPreviousStep(currentStep);
  }

    return (
      <div className="container">
        <div className="top-wrapper">
          <input
            type="range"
            min={1}
            max={10}
            value={step}
            onChange={handleRangeChanges}
          />
          <label htmlFor="range">{step}</label>
        </div>
        <div className="top-wrapper">
          <button onClick={() => setCount((count) => count - 1)}>➖</button>
          <input type="text" value={count} />
          <button onClick={() => setCount((count) => count + 1)}>➕</button>
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
      </div>
    );
  }

