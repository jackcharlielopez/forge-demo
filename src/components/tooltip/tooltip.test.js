import { render, screen, fireEvent } from "@testing-library/react";
import { Tooltip } from "./tooltip.js";
describe("Tooltip", () => {
    it("shows tooltip on hover", () => {
        render(<Tooltip content="Hello tooltip">
        <button>Hover me</button>
      </Tooltip>);
        fireEvent.mouseEnter(screen.getByText("Hover me"));
        expect(screen.getByRole("tooltip")).toHaveTextContent("Hello tooltip");
    });
    it("shows tooltip on focus", () => {
        render(<Tooltip content="Focus tooltip">
        <button>Focus me</button>
      </Tooltip>);
        fireEvent.focus(screen.getByText("Focus me"));
        expect(screen.getByRole("tooltip")).toHaveTextContent("Focus tooltip");
    });
    it("respects side and size props", () => {
        render(<Tooltip content="Side tooltip" side="right" size="lg">
        <button>Side</button>
      </Tooltip>);
        fireEvent.mouseEnter(screen.getByText("Side"));
        expect(screen.getByRole("tooltip")).toHaveTextContent("Side tooltip");
    });
    it("spreads additional props", () => {
        render(<Tooltip content="Test" data-testid="tooltip">
        <button>Test</button>
      </Tooltip>);
        expect(screen.getByTestId("tooltip")).toBeInTheDocument();
    });
});
