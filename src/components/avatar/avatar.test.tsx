import { render, screen } from "@testing-library/react";
import { Avatar } from "./avatar";

describe("Avatar", () => {
  it("renders with default props", () => {
    render(<Avatar>A</Avatar>);
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("renders with image src", () => {
    render(<Avatar src="/avatar.jpg" alt="User" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "/avatar.jpg");
  });

  it("renders fallback if image fails", () => {
    render(<Avatar src="bad.jpg" fallback="F" />);
    // Simulate error
    const img = screen.getByRole("img");
    img.dispatchEvent(new Event("error"));
    expect(screen.getByText("F")).toBeInTheDocument();
  });

  it("applies size and shape variants", () => {
    render(<Avatar size="lg" shape="square">S</Avatar>);
    const avatar = screen.getByText("S").parentElement;
    expect(avatar).toHaveClass("w-16");
    expect(avatar).toHaveClass("rounded-md");
  });

  it("spreads additional props", () => {
    render(<Avatar data-testid="avatar">T</Avatar>);
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
  });
});
