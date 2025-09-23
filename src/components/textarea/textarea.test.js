import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "./textarea.js";
describe("Textarea", () => {
    it("renders with default props", () => {
        render(<Textarea placeholder="Type your message..."/>);
        expect(screen.getByPlaceholderText("Type your message...")).toBeInTheDocument();
    });
    it("applies error variant", () => {
        render(<Textarea variant="error" error placeholder="Error"/>);
        const textarea = screen.getByPlaceholderText("Error");
        expect(textarea).toHaveClass("border-destructive");
        expect(textarea).toHaveAttribute("aria-invalid", "true");
    });
    it("applies success variant", () => {
        render(<Textarea variant="success" success placeholder="Success"/>);
        const textarea = screen.getByPlaceholderText("Success");
        expect(textarea).toHaveClass("border-green-500");
    });
    it("supports different sizes", () => {
        render(<Textarea size="sm" placeholder="Small"/>);
        expect(screen.getByPlaceholderText("Small")).toHaveClass("h-20");
        render(<Textarea size="lg" placeholder="Large"/>);
        expect(screen.getByPlaceholderText("Large")).toHaveClass("h-48");
    });
    it("spreads additional props", async () => {
        const onChange = jest.fn();
        render(<Textarea onChange={onChange} placeholder="Change me"/>);
        await userEvent.type(screen.getByPlaceholderText("Change me"), "abc");
        expect(onChange).toHaveBeenCalled();
    });
});
