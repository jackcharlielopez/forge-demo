import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Tabs, TabPanel } from "./tabs";
import * as React from "react";

describe("Tabs", () => {
  const tabs = [
    { label: "Tab 1", value: "tab1" },
    { label: "Tab 2", value: "tab2" },
    { label: "Tab 3", value: "tab3", disabled: true },
  ];

  it("renders tab triggers and panels", () => {
    render(
      <Tabs tabs={tabs} defaultValue="tab1">
        <TabPanel value="tab1">Panel 1</TabPanel>
        <TabPanel value="tab2">Panel 2</TabPanel>
        <TabPanel value="tab3">Panel 3</TabPanel>
      </Tabs>,
    );
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Panel 1")).toBeInTheDocument();
  });

  it("switches panels on tab click", () => {
    render(
      <Tabs tabs={tabs} defaultValue="tab1">
        <TabPanel value="tab1">Panel 1</TabPanel>
        <TabPanel value="tab2">Panel 2</TabPanel>
        <TabPanel value="tab3">Panel 3</TabPanel>
      </Tabs>,
    );
    fireEvent.click(screen.getByText("Tab 2"));
    expect(screen.getByText("Panel 2")).toBeInTheDocument();
  });

  it("does not switch to disabled tab", () => {
    render(
      <Tabs tabs={tabs} defaultValue="tab1">
        <TabPanel value="tab1">Panel 1</TabPanel>
        <TabPanel value="tab2">Panel 2</TabPanel>
        <TabPanel value="tab3">Panel 3</TabPanel>
      </Tabs>,
    );
    fireEvent.click(screen.getByText("Tab 3"));
    expect(screen.getByText("Panel 1")).toBeInTheDocument();
  });

  it("calls onChange when tab is changed", () => {
    const onChange = vi.fn();
    render(
      <Tabs tabs={tabs} defaultValue="tab1" onChange={onChange}>
        <TabPanel value="tab1">Panel 1</TabPanel>
        <TabPanel value="tab2">Panel 2</TabPanel>
        <TabPanel value="tab3">Panel 3</TabPanel>
      </Tabs>,
    );
    fireEvent.click(screen.getByText("Tab 2"));
    expect(onChange).toHaveBeenCalledWith("tab2");
  });
});
