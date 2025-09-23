import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox.js";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    variant: "error",
    error: true,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    success: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Small: Story = {
  args: {
    uiSize: "sm",
  },
};

export const Large: Story = {
  args: {
    uiSize: "lg",
  },
};
