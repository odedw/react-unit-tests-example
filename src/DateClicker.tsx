import React from "react";

interface Props {
  getDateString: () => string;
}

const DateClicker: React.FC<Props> = (props) => {
  const [lastClicked, setLastClicked] = React.useState<string>(
    props.getDateString()
  );
  const onClick = () => {
    setLastClicked(props.getDateString());
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
