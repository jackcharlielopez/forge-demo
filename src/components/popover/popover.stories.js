import { Popover } from "./popover.js";
import * as React from "react";
const meta = {
    title: "UI/Popover",
    component: Popover,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        trigger: <button>Open Popover</button>,
        children: <div>Popover content goes here.</div>,
        side: "bottom",
        size: "md",
    },
};
export const Top = {
    args: {
        trigger: <button>Top Popover</button>,
        children: <div>Popover on top.</div>,
        side: "top",
    },
};
export const Large = {
    args: {
        trigger: <button>Large Popover</button>,
        children: <div>Large popover content.</div>,
        size: "lg",
    },
};
