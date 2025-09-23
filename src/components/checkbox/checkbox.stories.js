import { Checkbox } from "./checkbox.js";
const meta = {
    title: "UI/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {},
};
export const Error = {
    args: {
        variant: "error",
        error: true,
    },
};
export const Success = {
    args: {
        variant: "success",
        success: true,
    },
};
export const Indeterminate = {
    args: {
        indeterminate: true,
    },
};
export const Small = {
    args: {
        size: "sm",
    },
};
export const Large = {
    args: {
        size: "lg",
    },
};
