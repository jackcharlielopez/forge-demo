import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input.js";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type here...",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    error: true,
    placeholder: "Error state",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    success: true,
    placeholder: "Success state",
  },
};

export const Small: Story = {
  args: {
    uiSize: "sm",
    placeholder: "Small input",
  },
};

export const Large: Story = {
  args: {
    uiSize: "lg",
    placeholder: "Large input",
  },
};
