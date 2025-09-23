import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "./stepper.js";
import * as React from "react";

const meta: Meta<typeof Stepper> = {
  title: "UI/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  { label: "Step 1", value: "s1" },
  { label: "Step 2", value: "s2" },
  { label: "Step 3", value: "s3" },
];

export const Default: Story = {
  args: {
    steps,
    defaultValue: "s1",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    steps,
    defaultValue: "s2",
    size: "lg",
  },
};

export const Completed: Story = {
  args: {
    steps: [
      { label: "Step 1", value: "s1", completed: true },
      { label: "Step 2", value: "s2", completed: true },
      { label: "Step 3", value: "s3" },
    ],
    defaultValue: "s3",
  },
};
