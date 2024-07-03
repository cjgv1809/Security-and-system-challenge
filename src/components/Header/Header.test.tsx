import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the header with the name", () => {
    const name = "John Doe";
    render(<Header name={name} imageUrl="/next.svg" />);

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const name = "John Doe";
    const { container } = render(<Header name={name} imageUrl="/next.svg" />);

    expect(container).toMatchSnapshot();
  });
});
