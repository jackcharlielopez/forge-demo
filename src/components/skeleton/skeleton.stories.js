import { Skeleton } from "./skeleton.js";
const meta = {
    title: "UI/Skeleton",
    component: Skeleton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        size: "md",
        shape: "rect",
    },
};
export const Circle = {
    args: {
        size: "md",
        shape: "circle",
    },
};
export const Large = {
    args: {
        size: "lg",
        shape: "rect",
    },
};
