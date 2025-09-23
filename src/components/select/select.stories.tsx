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
    placeholder: "Select an option",
  },
};

export const Error: Story = {
  args: {
    options,
    variant: "error",
    error: true,
    placeholder: "Error state",
  },
};

export const Success: Story = {
  args: {
    options,
    variant: "success",
    success: true,
    placeholder: "Success state",
  },
};

export const Small: Story = {
  args: {
    options,
  uiSize: "sm",
    placeholder: "Small select",
  },
};

export const Large: Story = {
  args: {
    options,
  uiSize: "lg",
    placeholder: "Large select",
  },
};
