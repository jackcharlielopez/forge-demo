import { Badge } from "./badge.js";
const meta = {
    title: "UI/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        children: "Default",
    },
};
export const Success = {
    args: {
        color: "success",
        children: "Success",
    },
};
export const Error = {
    args: {
        color: "error",
        children: "Error",
    },
};
export const Info = {
    args: {
        color: "info",
        children: "Info",
    },
};
export const Warning = {
    args: {
        color: "warning",
        children: "Warning",
    },
};
export const Muted = {
    args: {
        color: "muted",
        children: "Muted",
    },
};
export const Square = {
    args: {
        shape: "square",
        children: "Square",
    },
};
