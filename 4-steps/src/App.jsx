import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }
  function handleNext() {
    if (step < 3) setStep((curStep) => curStep + 1);
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => setIsOpen((curIsOpen) => !curIsOpen)}
      >
        &times;
      </button>
      {isOpen && (
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
          <Message step={step}>
            <p>{messages[step - 1]}</p>
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                OnClick={() => alert(messages[step - 1])}
                textColor="#333"
              >
                Learn how
              </Button>
            </div>
          </Message>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#FFF" OnClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#FFF" OnClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Message({ step, children }) {
  return (
    <div className="message">
      {" "}
      <h3>Step {step}: </h3>
      {children}
    </div>
  );
}

function Button({ bgColor, textColor, OnClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={OnClick}
    >
      {children}
    </button>
  );
}
