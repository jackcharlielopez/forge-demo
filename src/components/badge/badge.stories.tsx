import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge.js";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    children: "Success",
  },
};

export const Error: Story = {
  args: {
    color: "error",
    children: "Error",
  },
};

export const Info: Story = {
  args: {
    color: "info",
    children: "Info",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    children: "Warning",
  },
};

export const Muted: Story = {
  args: {
    color: "muted",
    children: "Muted",
  },
};

export const Square: Story = {
  args: {
    shape: "square",
    children: "Square",
  },
};
