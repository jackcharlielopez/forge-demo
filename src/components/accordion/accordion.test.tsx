import { render, screen, fireEvent } from "@testing-library/react";
import { Accordion } from "./accordion.js";
import * as React from "react";

describe("Accordion", () => {
  const items = [
    { label: "Section 1", value: "s1", content: <div>Content 1</div> },
    { label: "Section 2", value: "s2", content: <div>Content 2</div> },
    { label: "Section 3", value: "s3", content: <div>Content 3</div>, disabled: true },
  ];

  it("renders sections and content", () => {
    render(<Accordion items={items} defaultValue={["s1"]} />);
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("toggles content on click", () => {
    render(<Accordion items={items} defaultValue={[]} />);
    fireEvent.click(screen.getByText("Section 2"));
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("does not open disabled section", () => {
    render(<Accordion items={items} defaultValue={[]} />);
    fireEvent.click(screen.getByText("Section 3"));
    expect(screen.queryByText("Content 3")).toBeNull();
  });

  it("supports multiple open sections", () => {
    render(<Accordion items={items} defaultValue={["s1"]} multiple />);
    fireEvent.click(screen.getByText("Section 2"));
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("calls onChange when toggled", () => {
    const onChange = jest.fn();
    render(<Accordion items={items} defaultValue={[]} onChange={onChange} />);
    fireEvent.click(screen.getByText("Section 1"));
    expect(onChange).toHaveBeenCalledWith(["s1"]);
  });
});
