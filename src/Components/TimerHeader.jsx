import React from "react";
const TimerHeader = ({ activeTab, onTabChange }) => {
  return (
    <div className="timer-header">
      <button
        className={activeTab === "timer" ? "active" : ""}
        onClick={() => onTabChange("timer")}
      >
        Timer
      </button>
      <button
        className={activeTab === "stopwatch" ? "active" : ""}
        onClick={() => onTabChange("stopwatch")}
      >
        Stopwatch
      </button>
    </div>
  );
};

export default TimerHeader;
