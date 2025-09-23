import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./breadcrumbs.js";
import * as React from "react";

const meta: Meta<typeof Breadcrumbs> = {
  title: "UI/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const items = [
  { label: "Home", href: "/" },
  { label: "Library", href: "/library" },
  { label: "Data", active: true },
];

export const Default: Story = {
  args: {
    items,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    items,
    size: "lg",
    separator: ">",
  },
};
