import { render, screen } from "@testing-library/react";
import { Timeline } from "./timeline";
import * as React from "react";

describe("Timeline", () => {
  const items = [
    { label: "Step 1", content: "Started project", completed: true },
    { label: "Step 2", content: "First milestone", active: true },
    { label: "Step 3", content: "In progress" },
    { label: "Step 4", content: "Completed" },
  ];

  it("renders all items and highlights active/completed", () => {
    const { container } = render(<Timeline items={items} />);
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    // Find all indicator dots
    const indicators = container.querySelectorAll(".w-4.h-4");
    // Step 1: completed (green), Step 2: active (blue)
    expect(indicators[0]).toHaveClass("border-green-600");
    expect(indicators[1]).toHaveClass("border-blue-600");
  });

  it("renders content for each item", () => {
    render(<Timeline items={items} />);
    expect(screen.getByText("Started project")).toBeInTheDocument();
    expect(screen.getByText("First milestone")).toBeInTheDocument();
  });

  it("renders custom icons", () => {
    render(
      <Timeline
        items={[
          { label: "Custom", icon: <span data-testid="icon">★</span> },
        ]}
      />
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
