import React from "react";
import { render, screen } from "@testing-library/react";
import Interests from "./Interests";

describe("Interests", () => {
  it("renders the list of interests", () => {
    const interests = ["Coding", "Reading", "Traveling"];
    render(<Interests interests={interests} />);

    expect(screen.getByText("Intereses")).toBeInTheDocument();
    interests.forEach((interest) => {
      expect(screen.getByText(interest)).toBeInTheDocument();
    });
  });

  it("renders a message if there are no interests", () => {
    render(<Interests interests={[]} />);

    expect(screen.getByText("No hay intereses")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const interests = ["Coding", "Reading", "Traveling"];
    const { container } = render(<Interests interests={interests} />);

    expect(container).toMatchSnapshot();
  });
});
