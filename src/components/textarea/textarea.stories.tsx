import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea.js";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Type your message...",
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
    size: "sm",
    placeholder: "Small textarea",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Large textarea",
  },
};
