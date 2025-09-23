import { render, screen } from "@testing-library/react";
import { Alert } from "./alert.js";
describe("Alert", () => {
    it("renders with default props", () => {
        render(<Alert title="Default" description="Desc"/>);
        expect(screen.getByText("Default")).toBeInTheDocument();
        expect(screen.getByText("Desc")).toBeInTheDocument();
    });
    it("applies type variant", () => {
        render(<Alert type="success" title="Success"/>);
        expect(screen.getByText("Success").parentElement?.parentElement).toHaveClass("bg-green-50");
    });
    it("renders icon, title, and description", () => {
        render(<Alert icon={<span data-testid="icon">I</span>} title="T" description="D"/>);
        expect(screen.getByTestId("icon")).toBeInTheDocument();
        expect(screen.getByText("T")).toBeInTheDocument();
        expect(screen.getByText("D")).toBeInTheDocument();
    });
    it("spreads additional props", () => {
        render(<Alert data-testid="alert">Test</Alert>);
        expect(screen.getByTestId("alert")).toBeInTheDocument();
    });
});
