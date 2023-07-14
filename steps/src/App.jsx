import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div class className={step >= 1 && "active"}>
          1
        </div>
        <div class className={step >= 2 && "active"}>
          2
        </div>
        <div class className={step >= 3 && "active"}>
          3
        </div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#FFF" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#FFF" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
