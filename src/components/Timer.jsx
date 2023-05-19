import React from "react";
import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from "react-countdown";
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <span style={{ color: "var(--orange-color)" }}>See you at the event!</span>;
  } else {
    // Render a countdown
    return (
      <div className="timerDivWrapper">
        <div className="timerDiv">
          <span style={{ color: "var(--orange-color)" }}>{zeroPad(days)}</span>
          <span className="timerQuery">Days</span>
        </div>
        <div className="timerDiv">
          <span style={{ color: "var(--orange-color)" }}>{zeroPad(hours)}</span>
          <span className="timerQuery">Hours</span>
        </div>
        <div className="timerDiv">
          <span style={{ color: "var(--blue-color)" }}>{zeroPad(minutes)}</span>
          <span className="timerQuery">Minutes</span>
        </div>
        <div className="timerDiv">
          <span style={{ color: "var(--blue-color)" }}>{zeroPad(seconds)}</span>
          <span className="timerQuery">Seconds</span>
        </div>
      </div>
    );
  }
};
const Timer = () => {
  return (
    <div className="timer">
      <h3>Starting In</h3>
      <Countdown date="2023-04-29T01:02:03" renderer={renderer} />
    </div>
  );
};

export default Timer;
