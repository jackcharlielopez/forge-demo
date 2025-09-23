import { Alert } from "./alert.js";
const meta = {
    title: "UI/Alert",
    component: Alert,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        title: "Default Alert",
        description: "This is a default alert.",
    },
};
export const Info = {
    args: {
        type: "info",
        title: "Info Alert",
        description: "This is an info alert.",
    },
};
export const Success = {
    args: {
        type: "success",
        title: "Success Alert",
        description: "This is a success alert.",
    },
};
export const Warning = {
    args: {
        type: "warning",
        title: "Warning Alert",
        description: "This is a warning alert.",
    },
};
export const Error = {
    args: {
        type: "error",
        title: "Error Alert",
        description: "This is an error alert.",
    },
};
