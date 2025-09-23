import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./pagination.js";
import * as React from "react";

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const Template = (args: React.ComponentProps<typeof Pagination>) => {
  const [page, setPage] = React.useState(1);
  return <Pagination {...args} page={page} onPageChange={setPage} />;
};

export const Default: Story = {
  render: Template,
  args: {
    pageCount: 10,
    size: "md",
    showEdges: true,
  },
};

export const Large: Story = {
  render: Template,
  args: {
    pageCount: 20,
    size: "lg",
    showEdges: true,
  },
};
