import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [output, setOutPut] = useState("");
  const [isLoading, setIsLoading] = useState();

  useEffect(
    function () {
      async function CurrencyFetch() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        );
        const data = await res.json();
        console.log(data.rates);

        setOutPut(data.rates[to]);
        setIsLoading(false);
      }
      if (from === to) return setOutPut(amount);

      CurrencyFetch();
    },
    [amount, from, to]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select onChange={(e) => setFrom(e.target.value)} disabled={isLoading}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setTo(e.target.value)} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        OUTPUT: {output} {to}
      </p>
    </div>
  );
}
