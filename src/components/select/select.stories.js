import { Select } from "./select.js";
const options = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three", disabled: true },
];
const meta = {
    title: "UI/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        options,
        placeholder: "Select an option",
    },
};
export const Error = {
    args: {
        options,
        variant: "error",
        error: true,
        placeholder: "Error state",
    },
};
export const Success = {
    args: {
        options,
        variant: "success",
        success: true,
        placeholder: "Success state",
    },
};
export const Small = {
    args: {
        options,
        size: "sm",
        placeholder: "Small select",
    },
};
export const Large = {
    args: {
        options,
        size: "lg",
        placeholder: "Large select",
    },
};
