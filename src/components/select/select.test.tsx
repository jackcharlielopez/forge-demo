import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./select";

describe("Select", () => {
  const options = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three", disabled: true },
  ];

  it("renders with default props", () => {
    render(<Select options={options} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("One")).toBeInTheDocument();
  });

  it("applies error variant", () => {
    render(<Select options={options} variant="error" error />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("border-destructive");
    expect(select).toHaveAttribute("aria-invalid", "true");
  });

  it("applies success variant", () => {
    render(<Select options={options} variant="success" success />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("border-green-500");
  });

  it("supports different sizes", () => {
    render(<Select options={options} size="sm" />);
  expect(screen.getAllByRole("combobox")[0]).toHaveClass("h-8");
  render(<Select options={options} size="lg" />);
  expect(screen.getAllByRole("combobox")[1]).toHaveClass("h-12");
  });

  it("spreads additional props", async () => {
    const onChange = jest.fn();
    render(<Select options={options} onChange={onChange} />);
    await userEvent.selectOptions(screen.getByRole("combobox"), "2");
    expect(onChange).toHaveBeenCalled();
  });
});
