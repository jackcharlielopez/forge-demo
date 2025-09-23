import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./tooltip.js";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "Tooltip text",
    children: <button>Hover me</button>,
  },
};

export const Top: Story = {
  args: {
    content: "Top tooltip",
    side: "top",
    children: <button>Top</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: "Bottom tooltip",
    side: "bottom",
    children: <button>Bottom</button>,
  },
};

export const Left: Story = {
  args: {
    content: "Left tooltip",
    side: "left",
    children: <button>Left</button>,
  },
};

export const Right: Story = {
  args: {
    content: "Right tooltip",
    side: "right",
    children: <button>Right</button>,
  },
};

export const Large: Story = {
  args: {
    content: "Large tooltip",
    size: "lg",
    children: <button>Large</button>,
  },
};
