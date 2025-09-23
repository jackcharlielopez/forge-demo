import { Radio } from "./radio.js";
const meta = {
    title: "UI/Radio",
    component: Radio,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        name: "group",
        value: "1",
    },
};
export const Error = {
    args: {
        name: "group",
        value: "2",
        variant: "error",
        error: true,
    },
};
export const Success = {
    args: {
        name: "group",
        value: "3",
        variant: "success",
        success: true,
    },
};
export const Small = {
    args: {
        name: "group",
        value: "4",
        size: "sm",
    },
};
export const Large = {
    args: {
        name: "group",
        value: "5",
        size: "lg",
    },
};
