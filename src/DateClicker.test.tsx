import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DateClicker from "./DateClicker";

function delay(ms = 1000 * 60 * 60) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

describe("DateClicker", () => {
  test("Should set last date clicked", async () => {
    render(<DateClicker />);

    fireEvent.click(document.getElementsByClassName("btn")[0]);

    const dateClicked = document.getElementsByClassName("click-date")[0];
    expect(dateClicked.innerHTML).toEqual(new Date().toLocaleTimeString());
  });
});
