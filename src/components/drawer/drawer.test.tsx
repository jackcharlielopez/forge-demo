import { render, screen, fireEvent } from "@testing-library/react";
import { Drawer } from "./drawer.js";
import * as React from "react";

describe("Drawer", () => {
  it("renders when open", () => {
    render(
      <Drawer open={true} onClose={() => {}} title="Test Drawer">
        <div>Drawer Content</div>
      </Drawer>
    );
    expect(screen.getByText("Test Drawer")).toBeInTheDocument();
    expect(screen.getByText("Drawer Content")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <Drawer open={false} onClose={() => {}} title="Closed Drawer">
        <div>Should not be visible</div>
      </Drawer>
    );
    expect(screen.queryByText("Closed Drawer")).toBeNull();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(
      <Drawer open={true} onClose={onClose} title="Closable Drawer">
        <div>Content</div>
      </Drawer>
    );
    fireEvent.click(screen.getByLabelText("Close"));
    expect(onClose).toHaveBeenCalled();
  });

  it("applies side and size variants", () => {
    render(
      <Drawer open={true} onClose={() => {}} side="left" size="lg" title="Large Drawer">
        <div>Large Content</div>
      </Drawer>
    );
    expect(screen.getByText("Large Drawer").parentElement).toHaveClass("w-[32rem]");
  });
});
