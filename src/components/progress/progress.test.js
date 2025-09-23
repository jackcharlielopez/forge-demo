import { render, screen } from "@testing-library/react";
import { Progress } from "./progress.js";
import * as React from "react";
describe("Progress", () => {
    it("renders with correct value and label", () => {
        render(<Progress value={50} max={100} showLabel/>);
        expect(screen.getByText("50%"));
    });
    it("clamps value between 0 and max", () => {
        render(<Progress value={150} max={100} showLabel/>);
        expect(screen.getByText("100%"));
        render(<Progress value={-10} max={100} showLabel/>);
        expect(screen.getByText("0%"));
    });
    it("applies size and color variants", () => {
        const { container } = render(<Progress value={30} size="lg" color="danger"/>);
        expect(container.firstChild).toHaveClass("h-4");
        // Bar color is applied to inner div
        expect(container.querySelector(".bg-red-600")).toBeTruthy();
    });
    it("spreads additional props", () => {
        render(<Progress value={10} data-testid="progress"/>);
        expect(screen.getByTestId("progress")).toBeInTheDocument();
    });
});
