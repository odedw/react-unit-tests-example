import React from "react";
import getDateString from "./DateFactory";

interface Props {}

const DateClicker: React.FC<Props> = (props) => {
  const [lastClicked, setLastClicked] = React.useState<string>(getDateString());
  const onClick = () => {
    setLastClicked(getDateString());
  };
  return (
    <div className="date-clicker">
      <button className="btn" onClick={onClick}>
        Click Me
      </button>
      <div data-testid="click-date" className="click-date">
        {lastClicked}
      </div>
    </div>
  );
};

export default DateClicker;
