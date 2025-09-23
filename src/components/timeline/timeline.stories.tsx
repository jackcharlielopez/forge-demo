import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "./timeline.js";

const meta: Meta<typeof Timeline> = {
  title: "UI/Timeline",
  component: Timeline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Timeline>;

const items = [
  { label: "Step 1", content: "Started project", completed: true },
  { label: "Step 2", content: "First milestone", active: true },
  { label: "Step 3", content: "In progress" },
  { label: "Step 4", content: "Completed" },
];

export const Default: Story = {
  args: {
    items,
    size: "md",
    align: "left",
  },
};

export const Centered: Story = {
  args: {
    items,
    align: "center",
  },
};

export const Large: Story = {
  args: {
    items,
    size: "lg",
  },
};
