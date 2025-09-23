import { render, screen } from "@testing-library/react";
import { Radio } from "./radio";

describe("Radio", () => {
  it("renders with default props", () => {
    render(<Radio name="group" value="1" />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("applies error variant", () => {
    render(<Radio name="group" value="2" variant="error" error />);
    const radio = screen.getByRole("radio");
    expect(radio).toHaveClass("border-destructive");
    expect(radio).toHaveAttribute("aria-invalid", "true");
  });

  it("applies success variant", () => {
    render(<Radio name="group" value="3" variant="success" success />);
    const radio = screen.getByRole("radio");
    expect(radio).toHaveClass("border-green-500");
  });

  it("supports different sizes", () => {
    render(<Radio name="group" value="4" size="sm" />);
    expect(screen.getAllByRole("radio")[0]).toHaveClass("w-4");
    render(<Radio name="group" value="5" size="lg" />);
    expect(screen.getAllByRole("radio")[1]).toHaveClass("w-6");
  });

  it("spreads additional props", () => {
    render(<Radio name="group" value="6" data-testid="radio" />);
    expect(screen.getByTestId("radio")).toBeInTheDocument();
  });
});
