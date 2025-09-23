import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { vi } from "vitest";
import { Modal } from "./modal";

describe("Modal", () => {
  it("renders when open", () => {
    render(
      <Modal open={true} onClose={() => {}} title="Test Modal">
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <Modal open={false} onClose={() => {}} title="Closed Modal">
        <div>Should not be visible</div>
      </Modal>
    );
    expect(screen.queryByText("Closed Modal")).toBeNull();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <Modal open={true} onClose={onClose} title="Closable Modal">
        <div>Content</div>
      </Modal>
    );
    fireEvent.click(screen.getByLabelText("Close"));
    expect(onClose).toHaveBeenCalled();
  });

  it("applies size variant", () => {
    render(
      <Modal open={true} onClose={() => {}} size="lg" title="Large Modal">
        <div>Large Content</div>
      </Modal>
    );
    expect(screen.getByText("Large Modal").parentElement).toHaveClass("max-w-lg");
  });
});
