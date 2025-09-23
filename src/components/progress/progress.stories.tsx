import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress.js";
import * as React from "react";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 40,
    max: 100,
    size: "md",
    color: "primary",
    showLabel: true,
  },
};

export const Large: Story = {
  args: {
    value: 75,
    size: "lg",
    color: "success",
    showLabel: true,
  },
};

export const Danger: Story = {
  args: {
    value: 60,
    color: "danger",
    showLabel: true,
  },
};
