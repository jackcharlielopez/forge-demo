import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./accordion.js";
import * as React from "react";

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  { label: "Section 1", value: "s1", content: <div>Content 1</div> },
  { label: "Section 2", value: "s2", content: <div>Content 2</div> },
  { label: "Section 3", value: "s3", content: <div>Content 3</div>, disabled: true },
];

export const Default: Story = {
  args: {
    items,
    defaultValue: ["s1"],
    size: "md",
  },
};

export const Multiple: Story = {
  args: {
    items,
    defaultValue: ["s1", "s2"],
    multiple: true,
  },
};

export const Large: Story = {
  args: {
    items,
    defaultValue: ["s2"],
    size: "lg",
  },
};
