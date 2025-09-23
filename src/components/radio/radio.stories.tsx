import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./radio.js";

const meta: Meta<typeof Radio> = {
  title: "UI/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    name: "group",
    value: "1",
  },
};

export const Error: Story = {
  args: {
    name: "group",
    value: "2",
    variant: "error",
    error: true,
  },
};

export const Success: Story = {
  args: {
    name: "group",
    value: "3",
    variant: "success",
    success: true,
  },
};

export const Small: Story = {
  args: {
    name: "group",
    value: "4",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    name: "group",
    value: "5",
    size: "lg",
  },
};
