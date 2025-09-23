import { Menu } from "./menu.js";
import * as React from "react";
const meta = {
    title: "UI/Menu",
    component: Menu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const items = [
    { label: "Edit", value: "edit" },
    { label: "Duplicate", value: "duplicate" },
    { label: "Delete", value: "delete", danger: true },
    { label: "Disabled", value: "disabled", disabled: true },
];
export const Default = {
    args: {
        trigger: <button>Open Menu</button>,
        items,
        size: "md",
    },
};
export const Large = {
    args: {
        trigger: <button>Large Menu</button>,
        items,
        size: "lg",
    },
};
