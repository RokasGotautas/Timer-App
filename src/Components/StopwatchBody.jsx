import React from "react";
import "./TimerApp.css";

const StopwatchBody = ({ time, isRunning, onActions }) => {
  return (
    <div className="stopwatch-body">
      <p>{formatTime(time)}</p>
      <button onClick={() => onActions("start")} disabled={isRunning}>
        Start
      </button>
      {isRunning && <button onClick={() => onActions("stop")}>Stop</button>}
      <button onClick={() => onActions("reset")}>Reset</button>
    </div>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

export default StopwatchBody;
