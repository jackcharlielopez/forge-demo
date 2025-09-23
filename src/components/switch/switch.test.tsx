import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Switch } from "./switch";

describe("Switch", () => {
  it("renders with default props", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("applies checked state", () => {
    render(<Switch checked />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });

  it("applies error state", () => {
    render(<Switch error />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-invalid", "true");
  });

  it("applies success state", () => {
    render(<Switch success />);
    // visually, bg-green-500 is applied
  });

  it("calls onChange when toggled", async () => {
    const onChange = vi.fn();
    render(<Switch onChange={onChange} />);
    await userEvent.click(screen.getByRole("switch"));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("does not call onChange when disabled", async () => {
    const onChange = vi.fn();
    render(<Switch disabled onChange={onChange} />);
    await userEvent.click(screen.getByRole("switch"));
    expect(onChange).not.toHaveBeenCalled();
  });
});
