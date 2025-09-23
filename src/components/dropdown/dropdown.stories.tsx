import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./dropdown.js";
import * as React from "react";

const meta: Meta<typeof Dropdown> = {
  title: "UI/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const items = [
  { label: "Profile" },
  { label: "Settings" },
  { label: "Logout", danger: true },
  { label: "Disabled", disabled: true },
];

export const Default: Story = {
  args: {
    trigger: <button>Open Dropdown</button>,
    items,
    size: "md",
    align: "left",
  },
};

export const RightAligned: Story = {
  args: {
    trigger: <button>Right Dropdown</button>,
    items,
    align: "right",
  },
};

export const Large: Story = {
  args: {
    trigger: <button>Large Dropdown</button>,
    items,
    size: "lg",
  },
};
