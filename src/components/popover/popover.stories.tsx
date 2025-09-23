import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./popover.js";
import * as React from "react";

const meta: Meta<typeof Popover> = {
  title: "UI/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <button>Open Popover</button>,
    children: <div>Popover content goes here.</div>,
    side: "bottom",
    size: "md",
  },
};

export const Top: Story = {
  args: {
    trigger: <button>Top Popover</button>,
    children: <div>Popover on top.</div>,
    side: "top",
  },
};

export const Large: Story = {
  args: {
    trigger: <button>Large Popover</button>,
    children: <div>Large popover content.</div>,
    size: "lg",
  },
};
