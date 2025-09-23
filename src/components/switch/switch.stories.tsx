import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch.js";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const Success: Story = {
  args: {
    success: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
