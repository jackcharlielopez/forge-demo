import { Input } from "./input.js";
const meta = {
    title: "UI/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        placeholder: "Type here...",
    },
};
export const Error = {
    args: {
        variant: "error",
        error: true,
        placeholder: "Error state",
    },
};
export const Success = {
    args: {
        variant: "success",
        success: true,
        placeholder: "Success state",
    },
};
export const Small = {
    args: {
        size: "sm",
        placeholder: "Small input",
    },
};
export const Large = {
    args: {
        size: "lg",
        placeholder: "Large input",
    },
};
