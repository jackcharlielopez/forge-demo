import { Timeline } from "./timeline.js";
const meta = {
    title: "UI/Timeline",
    component: Timeline,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const items = [
    { label: "Step 1", content: "Started project", completed: true },
    { label: "Step 2", content: "First milestone", active: true },
    { label: "Step 3", content: "In progress" },
    { label: "Step 4", content: "Completed" },
];
export const Default = {
    args: {
        items,
        size: "md",
        align: "left",
    },
};
export const Centered = {
    args: {
        items,
        align: "center",
    },
};
export const Large = {
    args: {
        items,
        size: "lg",
    },
};
