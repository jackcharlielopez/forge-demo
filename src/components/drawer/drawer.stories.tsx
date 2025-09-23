import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./drawer.js";
import * as React from "react";

const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const Template = (args: any) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Drawer</button>
      <Drawer {...args} open={open} onClose={() => setOpen(false)}>
        <div>Drawer content goes here.</div>
      </Drawer>
    </>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    title: "Default Drawer",
    side: "right",
    size: "md",
  },
};

export const Left: Story = {
  render: Template,
  args: {
    title: "Left Drawer",
    side: "left",
    size: "sm",
  },
};

export const Large: Story = {
  render: Template,
  args: {
    title: "Large Drawer",
    size: "lg",
  },
};
