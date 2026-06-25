import { useState } from "react";

export default function App() {
  return (
    <div className="app-container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handlePlus() {
    setStep((s) => s + 1);
  }
  function handleMinus() {
    setStep((s) => s - 1);
  }

  const currentStep = { step };
  console.log(currentStep);

  function handleCountPlus() {
    setCount((c) => c + step);
  }

  function handleCountMunus() {
    setCount((c) => c - step);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div className="app-container">
      <div className="container">
        <button onClick={handleMinus}>-</button>
        <p>Step: {step}</p>
        <button onClick={handlePlus}>+</button>
      </div>
      <div className="container">
        <button onClick={handleCountMunus}>-</button>
        <p>Count:{count} </p>
        <button onClick={handleCountPlus}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
        </span>
        <span>{date.toDateString()} </span>
      </p>
    </div>
  );
}
