import { render, screen, fireEvent } from "@testing-library/react";
import { Breadcrumbs } from "./breadcrumbs";
import * as React from "react";

describe("Breadcrumbs", () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Library", href: "/library" },
    { label: "Data", active: true },
  ];

  it("renders all items and highlights active", () => {
    render(<Breadcrumbs items={items} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Data")).toHaveClass("font-semibold");
  });

  it("calls onClick for links", () => {
    const onClick = jest.fn();
    render(
      <Breadcrumbs
        items={items.map((item) => item.href ? { ...item, onClick } : item)}
      />
    );
    fireEvent.click(screen.getByText("Home"));
    expect(onClick).toHaveBeenCalled();
  });

  it("renders custom separator", () => {
    render(<Breadcrumbs items={items} separator=">" />);
    expect(screen.getAllByText(">").length).toBeGreaterThan(0);
  });
});
