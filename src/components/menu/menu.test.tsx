import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Menu } from "./menu";
import * as React from "react";

describe("Menu", () => {
  const items = [
    { label: "Edit", value: "edit" },
    { label: "Duplicate", value: "duplicate" },
    { label: "Delete", value: "delete", danger: true },
    { label: "Disabled", value: "disabled", disabled: true },
  ];

  it("shows menu on trigger click", () => {
    render(<Menu trigger={<button>Open</button>} items={items} />);
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  it("calls onClick and closes menu", () => {
    const onClick = vi.fn();
    render(
      <Menu
        trigger={<button>Open</button>}
        items={items.map((item) => (item.value === "edit" ? { ...item, onClick } : item))}
      />
    );
    fireEvent.click(screen.getByText("Open"));
    fireEvent.click(screen.getByText("Edit"));
    expect(onClick).toHaveBeenCalled();
    expect(screen.queryByText("Edit")).toBeNull();
  });

  it("does not call onClick for disabled item", () => {
    const onClick = vi.fn();
    render(
      <Menu
        trigger={<button>Open</button>}
        items={items.map((item) => (item.value === "disabled" ? { ...item, onClick } : item))}
      />
    );
    fireEvent.click(screen.getByText("Open"));
    fireEvent.click(screen.getByText("Disabled"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies danger variant", () => {
    render(<Menu trigger={<button>Open</button>} items={items} />);
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Delete")).toHaveClass("text-red-600");
  });
});
