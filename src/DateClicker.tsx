import React from "react";

const DateClicker = () => {
  const [lastClicked, setLastClicked] = React.useState<string>(
    new Date().toLocaleTimeString()
  );
  const onClick = () => {
    setLastClicked(new Date().toLocaleTimeString());
  };
  return (
    <div className="date-clicker">
      <button className="btn" onClick={onClick}>
        Click Me
      </button>
      <div className="click-date">{lastClicked}</div>
    </div>
  );
};

export default DateClicker;
