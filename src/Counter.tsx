import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState<number>(0);
  const [lastClicked, setLastClicked] = React.useState<Date>(new Date());

  return (
    <div>
      <div className="counter">
        <button
          onClick={() => {
            setCount(count + 1);
            setLastClicked(new Date());
          }}
        >
          +
        </button>
        <div className="count">{count}</div>
      </div>
      <div>
        <span>Last Clicked: </span>
        <span>{lastClicked.toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default Counter;
