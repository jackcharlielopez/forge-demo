import { Drawer } from "./drawer.js";
import * as React from "react";
const meta = {
    title: "UI/Drawer",
    component: Drawer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const Template = (args) => {
    const [open, setOpen] = React.useState(false);
    return (<>
      <button onClick={() => setOpen(true)}>Open Drawer</button>
      <Drawer {...args} open={open} onClose={() => setOpen(false)}>
        <div>Drawer content goes here.</div>
      </Drawer>
    </>);
};
export const Default = {
    render: Template,
    args: {
        title: "Default Drawer",
        side: "right",
        size: "md",
    },
};
export const Left = {
    render: Template,
    args: {
        title: "Left Drawer",
        side: "left",
        size: "sm",
    },
};
export const Large = {
    render: Template,
    args: {
        title: "Large Drawer",
        size: "lg",
    },
};
