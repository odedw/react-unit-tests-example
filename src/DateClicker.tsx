import React from "react";

const DateClicker = () => {
  const [lastClicked, setLastClicked] = React.useState<Date>(new Date());
  const onClick = () => {
    setLastClicked(new Date());
  };
  return (
    <div className="date-clicker">
      <button className="btn" onClick={onClick}>
        Click Me
      </button>
      <div className="click-date">{lastClicked.toLocaleTimeString()}</div>
    </div>
  );
};

export default DateClicker;
