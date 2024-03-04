import React from "react";

const TimerBody = ({ time, isRunning, onClick, onReset, onStop }) => {
  return (
    <div className="timer-body">
      <p>{formatTime(time)}</p>
      <button onClick={onClick} disabled={isRunning}>
        {isRunning ? "Running" : "Start"}
      </button>
      {isRunning && <button onClick={onStop}>Stop</button>}
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

export default TimerBody;
