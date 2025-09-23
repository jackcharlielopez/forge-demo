import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton.js";

const meta: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    size: "md",
    shape: "rect",
  },
};

export const Circle: Story = {
  args: {
    size: "md",
    shape: "circle",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    shape: "rect",
  },
};
