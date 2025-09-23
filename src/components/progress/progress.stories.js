import { Progress } from "./progress.js";
const meta = {
    title: "UI/Progress",
    component: Progress,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        value: 40,
        max: 100,
        size: "md",
        color: "primary",
        showLabel: true,
    },
};
export const Large = {
    args: {
        value: 75,
        size: "lg",
        color: "success",
        showLabel: true,
    },
};
export const Danger = {
    args: {
        value: 60,
        color: "danger",
        showLabel: true,
    },
};
