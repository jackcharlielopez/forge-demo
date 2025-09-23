import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Stepper } from "./stepper";
import * as React from "react";

describe("Stepper", () => {
  const steps = [
    { label: "Step 1", value: "s1" },
    { label: "Step 2", value: "s2" },
    { label: "Step 3", value: "s3" },
  ];

  it("renders steps and highlights active", () => {
    render(<Stepper steps={steps} defaultValue="s2" />);
    expect(screen.getByText("Step 2")).toBeInTheDocument();
    expect(screen.getByText("Step 2").closest("button")).toHaveAttribute(
      "aria-current",
      "step",
    );
  });

  it("calls onChange when step is clicked", () => {
    const onChange = vi.fn();
    render(<Stepper steps={steps} defaultValue="s1" onChange={onChange} />);
    fireEvent.click(screen.getByText("Step 3"));
    expect(onChange).toHaveBeenCalledWith("s3");
  });

  it("does not call onChange for disabled step", () => {
    const onChange = vi.fn();
    render(
      <Stepper
        steps={[...steps, { label: "Step 4", value: "s4", disabled: true }]}
        defaultValue="s1"
        onChange={onChange}
      />,
    );
    fireEvent.click(screen.getByText("Step 4"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("applies completed variant", () => {
    render(
      <Stepper
        steps={[
          { label: "Step 1", value: "s1", completed: true },
          { label: "Step 2", value: "s2" },
        ]}
        defaultValue="s2"
      />,
    );
    expect(screen.getByText("✓")).toBeInTheDocument();
  });
});
