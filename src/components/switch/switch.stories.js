import { Switch } from "./switch.js";
const meta = {
    title: "UI/Switch",
    component: Switch,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {},
};
export const Checked = {
    args: {
        checked: true,
    },
};
export const Error = {
    args: {
        error: true,
    },
};
export const Success = {
    args: {
        success: true,
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
