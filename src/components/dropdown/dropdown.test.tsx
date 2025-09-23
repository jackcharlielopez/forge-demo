import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "./dropdown.js";
import * as React from "react";

describe("Dropdown", () => {
  const items = [
    { label: "Profile" },
    { label: "Settings" },
    { label: "Logout", danger: true },
    { label: "Disabled", disabled: true },
  ];

  it("shows dropdown on trigger click", () => {
    render(<Dropdown trigger={<button>Open</button>} items={items} />);
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("closes dropdown on item click", () => {
    render(<Dropdown trigger={<button>Open</button>} items={items} />);
    fireEvent.click(screen.getByText("Open"));
    fireEvent.click(screen.getByText("Profile"));
    expect(screen.queryByText("Profile")).toBeNull();
  });

  it("does not call onClick for disabled item", () => {
    const onClick = jest.fn();
    render(
      <Dropdown
        trigger={<button>Open</button>}
        items={items.map((item) => item.label === "Disabled" ? { ...item, onClick } : item)}
      />
    );
    fireEvent.click(screen.getByText("Open"));
    fireEvent.click(screen.getByText("Disabled"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies danger variant", () => {
    render(<Dropdown trigger={<button>Open</button>} items={items} />);
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Logout")).toHaveClass("text-red-600");
  });
});
