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

  /*
  function handlePlus() {
    setStep((s) => s + 1);
  }
  function handleMinus() {
    setStep((s) => s - 1);
  }
  */

  function handleCountPlus() {
    setCount((c) => c + step);
  }

  function handleCountMunus() {
    setCount((c) => c - step);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="app-container">
      <div className="container">
        <input
          type="range"
          nim="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div className="container">
        <button className="btn" onClick={handleCountMunus}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="btn" onClick={handleCountPlus}>
          +
        </button>
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
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
