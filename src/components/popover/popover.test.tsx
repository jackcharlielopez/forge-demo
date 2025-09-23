import { render, screen, fireEvent } from "@testing-library/react";
import { Popover } from "./popover.js";
import * as React from "react";

describe("Popover", () => {
  it("shows popover on trigger click", () => {
    render(
      <Popover
        trigger={<button>Open</button>}
        children={<div>Popover content</div>}
      />
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Popover content")).toBeInTheDocument();
  });

  it("hides popover on second trigger click", () => {
    render(
      <Popover
        trigger={<button>Open</button>}
        children={<div>Popover content</div>}
      />
    );
    const trigger = screen.getByText("Open");
    fireEvent.click(trigger);
    expect(screen.getByText("Popover content")).toBeInTheDocument();
    fireEvent.click(trigger);
    expect(screen.queryByText("Popover content")).toBeNull();
  });

  it("applies side and size props", () => {
    render(
      <Popover
        trigger={<button>Open</button>}
        children={<div>Popover content</div>}
        side="top"
        size="lg"
      />
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Popover content")).toBeInTheDocument();
  });

  it("spreads additional props", () => {
    render(
      <Popover
        trigger={<button>Open</button>}
        children={<div>Popover content</div>}
        data-testid="popover"
      />
    );
    expect(screen.getByTestId("popover")).toBeInTheDocument();
  });
});
