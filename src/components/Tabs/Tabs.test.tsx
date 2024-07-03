import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tabs, { Tab } from "./Tabs";

describe("Tabs Component", () => {
  it("should render the Tabs component", () => {
    render(
      <Tabs>
        <Tab title="Tab 1">Content 1</Tab>
        <Tab title="Tab 2">Content 2</Tab>
        <Tab title="Tab 3">Content 3</Tab>
      </Tabs>
    );

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Content 3")).not.toBeInTheDocument();
  });

  it("should change tabs on click", () => {
    render(
      <Tabs>
        <Tab title="Tab 1">Content 1</Tab>
        <Tab title="Tab 2">Content 2</Tab>
        <Tab title="Tab 3">Content 3</Tab>
      </Tabs>
    );

    fireEvent.click(screen.getByText("Tab 2"));
    expect(screen.getByText("Content 2")).toBeInTheDocument();
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Content 3")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Tab 3"));
    expect(screen.getByText("Content 3")).toBeInTheDocument();
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
  });

  it("should focus the active tab", () => {
    render(
      <Tabs>
        <Tab title="Tab 1">Content 1</Tab>
        <Tab title="Tab 2">Content 2</Tab>
        <Tab title="Tab 3">Content 3</Tab>
      </Tabs>
    );

    const tab2 = screen.getByText("Tab 2");
    fireEvent.click(tab2);

    expect(tab2).toHaveFocus();
  });

  it("should match the snapshot", () => {
    const { container } = render(
      <Tabs>
        <Tab title="Tab 1">Content 1</Tab>
        <Tab title="Tab 2">Content 2</Tab>
        <Tab title="Tab 3">Content 3</Tab>
      </Tabs>
    );

    expect(container).toMatchSnapshot();
  });
});
