import { render } from "@testing-library/react";
import { Skeleton } from "./skeleton.js";
import * as React from "react";
describe("Skeleton", () => {
    it("renders with default props", () => {
        const { container } = render(<Skeleton />);
        expect(container.firstChild).toHaveClass("animate-pulse");
    });
    it("applies shape and size variants", () => {
        const { container } = render(<Skeleton shape="circle" size="lg"/>);
        expect(container.firstChild).toHaveClass("rounded-full");
        expect(container.firstChild).toHaveClass("h-8");
        expect(container.firstChild).toHaveClass("w-48");
    });
    it("spreads additional props", () => {
        const { getByTestId } = render(<Skeleton data-testid="skeleton"/>);
        expect(getByTestId("skeleton")).toBeInTheDocument();
    });
});
