import { render, screen } from "@testing-library/react";
import { Card } from "./card.js";
describe("Card", () => {
    it("renders with default props", () => {
        render(<Card>Content</Card>);
        expect(screen.getByText("Content")).toBeInTheDocument();
    });
    it("applies shadow variant", () => {
        render(<Card shadow="lg">Shadow</Card>);
        expect(screen.getByText("Shadow")).toHaveClass("shadow-lg");
    });
    it("applies border variant", () => {
        render(<Card border="accent">Border</Card>);
        expect(screen.getByText("Border")).toHaveClass("border-2");
    });
    it("applies background variant", () => {
        render(<Card background="accent">BG</Card>);
        expect(screen.getByText("BG")).toHaveClass("bg-primary");
    });
    it("spreads additional props", () => {
        render(<Card data-testid="card">Test</Card>);
        expect(screen.getByTestId("card")).toBeInTheDocument();
    });
});
