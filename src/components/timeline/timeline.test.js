import { render, screen } from "@testing-library/react";
import { Timeline } from "./timeline.js";
import * as React from "react";
describe("Timeline", () => {
    const items = [
        { label: "Step 1", content: "Started project", completed: true },
        { label: "Step 2", content: "First milestone", active: true },
        { label: "Step 3", content: "In progress" },
        { label: "Step 4", content: "Completed" },
    ];
    it("renders all items and highlights active/completed", () => {
        render(<Timeline items={items}/>);
        expect(screen.getByText("Step 1")).toBeInTheDocument();
        expect(screen.getByText("Step 2")).toHaveClass("text-blue-600");
        expect(screen.getByText("Step 1")).toHaveClass("text-green-600");
    });
    it("renders content for each item", () => {
        render(<Timeline items={items}/>);
        expect(screen.getByText("Started project")).toBeInTheDocument();
        expect(screen.getByText("First milestone")).toBeInTheDocument();
    });
    it("renders custom icons", () => {
        render(<Timeline items={[
                { label: "Custom", icon: <span data-testid="icon">★</span> },
            ]}/>);
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });
});
