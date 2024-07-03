import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About", () => {
  it("renders the about section", () => {
    const description = "Desarrollador de software con 5 años de experiencia";
    render(<About description={description} />);

    expect(
      screen.getByRole("heading", { name: /sobre mí/i })
    ).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<About description="Sobre Joe" />);

    expect(container).toMatchSnapshot();
  });
});
