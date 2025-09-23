import { render, screen } from "@testing-library/react";
import { Badge } from "./badge.js";

describe("Badge", () => {
  it("renders with default props", () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText("Default")).toBeInTheDocument();
  });

  it("applies color variant", () => {
    render(<Badge color="success">Success</Badge>);
    expect(screen.getByText("Success")).toHaveClass("bg-green-100");
  });

  it("applies shape variant", () => {
    render(<Badge shape="square">Square</Badge>);
    expect(screen.getByText("Square")).toHaveClass("rounded-md");
  });

  it("spreads additional props", () => {
    render(<Badge data-testid="badge">Test</Badge>);
    expect(screen.getByTestId("badge")).toBeInTheDocument();
  });
});
