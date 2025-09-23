import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./alert.js";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: "Default Alert",
    description: "This is a default alert.",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    title: "Info Alert",
    description: "This is an info alert.",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    title: "Success Alert",
    description: "This is a success alert.",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Warning Alert",
    description: "This is a warning alert.",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    title: "Error Alert",
    description: "This is an error alert.",
  },
};
