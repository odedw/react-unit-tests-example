import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState<number>(0);
  const [lastClicked, setLastClicked] = React.useState<Date>(new Date());
  const onClick = () => {
    setCount(count + 1);
    setLastClicked(new Date());
  };
  return (
    <div className="counter-container">
      <div className="counter">
        <button className="btn" onClick={onClick}>
          Increment
        </button>
        <div className="count">{count}</div>
      </div>
      <div>
        <span>Last Clicked: </span>
        <span className="click-date">{lastClicked.toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default Counter;
