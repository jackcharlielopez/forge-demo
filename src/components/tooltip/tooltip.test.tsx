import { render, screen, fireEvent } from "@testing-library/react";
import { Tooltip } from "./tooltip";

describe("Tooltip", () => {
  it("shows tooltip on hover", async () => {
    render(
      <Tooltip content="Hello tooltip">
        <button>Hover me</button>
      </Tooltip>,
    );
    fireEvent.mouseEnter(screen.getByText("Hover me"));
    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "Hello tooltip",
    );
  });

  it("shows tooltip on focus", async () => {
    render(
      <Tooltip content="Focus tooltip">
        <button>Focus me</button>
      </Tooltip>,
    );
    fireEvent.focus(screen.getByText("Focus me"));
    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "Focus tooltip",
    );
  });

  it("respects side and size props", async () => {
    render(
      <Tooltip content="Side tooltip" side="right" size="lg">
        <button>Side</button>
      </Tooltip>,
    );
    fireEvent.mouseEnter(screen.getByText("Side"));
    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "Side tooltip",
    );
  });

  it("spreads additional props", () => {
    render(
      <Tooltip content="Test" data-testid="tooltip">
        <button>Test</button>
      </Tooltip>,
    );
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });
});
