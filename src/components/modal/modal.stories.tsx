import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./modal.js";
import * as React from "react";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const Template = (args: React.ComponentProps<typeof Modal>) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <div>Modal content goes here.</div>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    title: "Default Modal",
    size: "md",
  },
};

export const Large: Story = {
  render: Template,
  args: {
    title: "Large Modal",
    size: "lg",
  },
};

export const Small: Story = {
  render: Template,
  args: {
    title: "Small Modal",
    size: "sm",
  },
};
