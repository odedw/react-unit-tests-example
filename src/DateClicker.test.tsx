import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DateClicker from "./DateClicker";

jest.mock("./DateFactory", () => () => "SOME_DATE_STRING");

function delay(ms = 1000 * 60 * 60) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

describe("DateClicker", () => {
  test("Should set last date clicked", async () => {
    const { getByText, getByTestId } = render(<DateClicker />);

    fireEvent.click(getByText("Click Me"));

    // this shows how easy it is for the test to break if the unit doesn't use stable values
    await delay(150);

    const dateClicked = getByTestId("click-date");
    expect(dateClicked.innerHTML).toEqual("SOME_DATE_STRING");
  });
});
