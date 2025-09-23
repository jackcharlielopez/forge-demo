import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar.js";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    children: "A",
  },
};

export const WithImage: Story = {
  args: {
    src: "/avatar.jpg",
    alt: "User",
  },
};

export const Fallback: Story = {
  args: {
    fallback: "U",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "L",
  },
};

export const Square: Story = {
  args: {
    shape: "square",
    children: "S",
  },
};
