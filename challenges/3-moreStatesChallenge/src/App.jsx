import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [bill, setBill] = useState(0);

  const [percentages, setPercentages] = useState([]);

  const handleAddPercentage = (identifier, value) => {
    if (identifier >= 0 && identifier <= 1) {
      setPercentages((prevPercentages) => {
        const updatedPercentages = [...prevPercentages];
        updatedPercentages[identifier] = value;
        return updatedPercentages;
      });
    }
  };

  const tip = percentages.reduce((acc, val) => acc + val, 0);

  return (
    <main>
      <BillInput setBill={setBill} />
      <PercentageInput OnAddPercent={(value) => handleAddPercentage(0, value)}>
        <p>How did you like the service?</p>
      </PercentageInput>
      <PercentageInput OnAddPercent={(value) => handleAddPercentage(1, value)}>
        <p>How did your friend like the service?</p>
      </PercentageInput>
      <Output bill={bill} tip={tip} />
      <ResetButton OnReset={() => { setBill(0); setPercentages([]); }} />
    </main>
  );
}

function BillInput({ setBill }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <div className="containerInput">
        <input
          type="text"
          placeholder="insert your bill..."
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

function PercentageInput({ OnAddPercent, children }) {
  return (
    <div>
      {children}
      <select onChange={(e) => OnAddPercent(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill,tip }) {
  return <h1>{`You pay $${bill+tip} ($${bill} + ${tip}) tip`}</h1>;
}

function ResetButton({ OnReset }) {
  return <button onClick={OnReset}>Reset</button>;
}
