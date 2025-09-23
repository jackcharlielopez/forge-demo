import { Stepper } from "./stepper.js";
const meta = {
    title: "UI/Stepper",
    component: Stepper,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const steps = [
    { label: "Step 1", value: "s1" },
    { label: "Step 2", value: "s2" },
    { label: "Step 3", value: "s3" },
];
export const Default = {
    args: {
        steps,
        defaultValue: "s1",
        size: "md",
    },
};
export const Large = {
    args: {
        steps,
        defaultValue: "s2",
        size: "lg",
    },
};
export const Completed = {
    args: {
        steps: [
            { label: "Step 1", value: "s1", completed: true },
            { label: "Step 2", value: "s2", completed: true },
            { label: "Step 3", value: "s3" },
        ],
        defaultValue: "s3",
    },
};
