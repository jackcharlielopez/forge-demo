import { Modal } from "./modal.js";
import * as React from "react";
const meta = {
    title: "UI/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const Template = (args) => {
    const [open, setOpen] = React.useState(false);
    return (<>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <div>Modal content goes here.</div>
      </Modal>
    </>);
};
export const Default = {
    render: Template,
    args: {
        title: "Default Modal",
        size: "md",
    },
};
export const Large = {
    render: Template,
    args: {
        title: "Large Modal",
        size: "lg",
    },
};
export const Small = {
    render: Template,
    args: {
        title: "Small Modal",
        size: "sm",
    },
};
