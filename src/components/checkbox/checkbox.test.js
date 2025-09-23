import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./checkbox.js";
describe("Checkbox", () => {
    it("renders with default props", () => {
        render(<Checkbox />);
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });
    it("applies error variant", () => {
        render(<Checkbox variant="error" error/>);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toHaveClass("border-destructive");
        expect(checkbox).toHaveAttribute("aria-invalid", "true");
    });
    it("applies success variant", () => {
        render(<Checkbox variant="success" success/>);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toHaveClass("border-green-500");
    });
    it("supports indeterminate state", () => {
        const ref = { current: null };
        render(<Checkbox indeterminate ref={ref}/>);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toHaveAttribute("aria-checked", "mixed");
    });
    it("supports different sizes", () => {
        render(<Checkbox size="sm"/>);
        expect(screen.getByRole("checkbox")).toHaveClass("w-4");
        render(<Checkbox size="lg"/>);
        expect(screen.getByRole("checkbox")).toHaveClass("w-6");
    });
    it("spreads additional props", async () => {
        const onChange = jest.fn();
        render(<Checkbox onChange={onChange}/>);
        await userEvent.click(screen.getByRole("checkbox"));
        expect(onChange).toHaveBeenCalled();
    });
});
