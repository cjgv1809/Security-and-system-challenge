import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "./Alert";

describe("Alert", () => {
  it("renders the alert with the message", () => {
    const message = "This is an alert";
    render(<Alert type="info" message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("calls onClose after 5 seconds", () => {
    jest.useFakeTimers();
    const onClose = jest.fn();
    render(<Alert type="info" message="This is an alert" onClose={onClose} />);

    jest.advanceTimersByTime(5000);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Alert type="info" message="This is an alert" />
    );

    expect(container).toMatchSnapshot();
  });
});
