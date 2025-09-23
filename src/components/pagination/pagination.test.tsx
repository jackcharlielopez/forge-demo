import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "./pagination.js";
import * as React from "react";

describe("Pagination", () => {
  it("renders page buttons and highlights active", () => {
    render(<Pagination page={2} pageCount={5} onPageChange={() => {}} />);
    expect(screen.getByText("2")).toHaveAttribute("aria-current", "page");
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("calls onPageChange when a page is clicked", () => {
    const onPageChange = jest.fn();
    render(<Pagination page={1} pageCount={3} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText("2"));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("disables prev/next at edges", () => {
    render(<Pagination page={1} pageCount={3} onPageChange={() => {}} />);
    expect(screen.getByLabelText("Previous page")).toBeDisabled();
    render(<Pagination page={3} pageCount={3} onPageChange={() => {}} />);
    expect(screen.getByLabelText("Next page")).toBeDisabled();
  });

  it("shows ellipsis for large page counts", () => {
    render(<Pagination page={10} pageCount={20} onPageChange={() => {}} />);
    expect(screen.getAllByText("…").length).toBeGreaterThan(0);
  });
});
