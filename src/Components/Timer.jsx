import React, { useState, useEffect } from "react";
import TimerHeader from "./TimerHeader";
import TimerBody from "./TimerBody";
import StopwatchBody from "./StopwatchBody";

const Timer = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [time, setTime] = useState(300);
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("timer");

  useEffect(() => {
    let timer;

    if (isTimerRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isTimerRunning, time]);

  useEffect(() => {
    let stopwatchInterval;

    if (isStopwatchRunning) {
      stopwatchInterval = setInterval(() => {
        setStopwatchTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(stopwatchInterval);
  }, [isStopwatchRunning]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleTimerClick = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const handleTimerReset = () => {
    setIsTimerRunning(false);
    setTime(300);
  };

  const handleTimerStop = () => {
    setIsTimerRunning(false);
  };

  const handleStopwatchActions = (action) => {
    if (action === "start") {
      setIsStopwatchRunning(true);
    } else if (action === "stop") {
      setIsStopwatchRunning(false);
    } else if (action === "reset") {
      setStopwatchTime(0);
    }
  };

  return (
    <div className="timer-container">
      <TimerHeader activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="timer-content">
        {activeTab === "timer" ? (
          <TimerBody
            time={time}
            isRunning={isTimerRunning}
            onClick={handleTimerClick}
            onReset={handleTimerReset}
            onStop={handleTimerStop}
          />
        ) : (
          activeTab === "stopwatch" && (
            <StopwatchBody
              time={stopwatchTime}
              isRunning={isStopwatchRunning}
              onActions={handleStopwatchActions}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Timer;
