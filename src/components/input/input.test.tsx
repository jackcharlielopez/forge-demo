import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Input } from "./input";

describe("Input", () => {
  it("renders with default props", () => {
    render(<Input placeholder="Type here..." />);
    expect(screen.getByPlaceholderText("Type here...")).toBeInTheDocument();
  });

  it("applies error variant", () => {
    render(<Input variant="error" error placeholder="Error" />);
    const input = screen.getByPlaceholderText("Error");
    expect(input).toHaveClass("border-destructive");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("applies success variant", () => {
    render(<Input variant="success" success placeholder="Success" />);
    const input = screen.getByPlaceholderText("Success");
    expect(input).toHaveClass("border-green-500");
  });

  it("supports different sizes", () => {
    render(<Input uiSize="sm" placeholder="Small" />);
    expect(screen.getByPlaceholderText("Small")).toHaveClass("h-8");
    render(<Input uiSize="lg" placeholder="Large" />);
    expect(screen.getByPlaceholderText("Large")).toHaveClass("h-12");
  });

  it("spreads additional props", async () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} placeholder="Change me" />);
    await userEvent.type(screen.getByPlaceholderText("Change me"), "abc");
    expect(onChange).toHaveBeenCalled();
  });
});
