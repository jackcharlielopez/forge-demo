import { Textarea } from "./textarea.js";
const meta = {
    title: "UI/Textarea",
    component: Textarea,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        placeholder: "Type your message...",
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
        placeholder: "Small textarea",
    },
};
export const Large = {
    args: {
        size: "lg",
        placeholder: "Large textarea",
    },
};
