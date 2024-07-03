import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("ContactForm Component", () => {
  it("should render the form correctly", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });

  it("should match the snapshot", () => {
    const { container } = render(<ContactForm />);
    expect(container).toMatchSnapshot();
  });
});
