import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card.js";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "This is a card.",
  },
};

export const ShadowLg: Story = {
  args: {
    shadow: "lg",
    children: "Large shadow card.",
  },
};

export const BorderAccent: Story = {
  args: {
    border: "accent",
    children: "Accent border card.",
  },
};

export const BackgroundAccent: Story = {
  args: {
    background: "accent",
    children: "Accent background card.",
  },
};
