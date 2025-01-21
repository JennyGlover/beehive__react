import "./TimeSent.css";

function TimeSent({ position }) {
  return (
    <div className={`TimeSent TimeSent__position-${position}`}>
      Today 10:00PM
    </div>
  );
}

export default TimeSent;
