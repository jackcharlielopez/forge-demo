import { Dropdown } from "./dropdown.js";
import * as React from "react";
const meta = {
    title: "UI/Dropdown",
    component: Dropdown,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const items = [
    { label: "Profile" },
    { label: "Settings" },
    { label: "Logout", danger: true },
    { label: "Disabled", disabled: true },
];
export const Default = {
    args: {
        trigger: <button>Open Dropdown</button>,
        items,
        size: "md",
        align: "left",
    },
};
export const RightAligned = {
    args: {
        trigger: <button>Right Dropdown</button>,
        items,
        align: "right",
    },
};
export const Large = {
    args: {
        trigger: <button>Large Dropdown</button>,
        items,
        size: "lg",
    },
};
