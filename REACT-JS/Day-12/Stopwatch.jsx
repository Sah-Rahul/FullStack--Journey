import { useRef, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return; // Already running
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>⏱ Stopwatch: {seconds}s</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} style={{ margin: "0 10px" }}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;
