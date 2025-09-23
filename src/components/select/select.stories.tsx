import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select.js";

const options = [
  { value: "1", label: "One" },
  { value: "2", label: "Two" },
  { value: "3", label: "Three", disabled: true },
];

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options,
  },
};

export const Error: Story = {
  args: {
    options,
    variant: "error",
    error: true,
  },
};

export const Success: Story = {
  args: {
    options,
    variant: "success",
    success: true,
  },
};

export const Small: Story = {
  args: {
    options,
    uiSize: "sm",
  },
};

export const Large: Story = {
  args: {
    options,
    uiSize: "lg",
  },
};
