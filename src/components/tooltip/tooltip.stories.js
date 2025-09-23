import { Tooltip } from "./tooltip.js";
const meta = {
    title: "UI/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        content: "Tooltip text",
        children: <button>Hover me</button>,
    },
};
export const Top = {
    args: {
        content: "Top tooltip",
        side: "top",
        children: <button>Top</button>,
    },
};
export const Bottom = {
    args: {
        content: "Bottom tooltip",
        side: "bottom",
        children: <button>Bottom</button>,
    },
};
export const Left = {
    args: {
        content: "Left tooltip",
        side: "left",
        children: <button>Left</button>,
    },
};
export const Right = {
    args: {
        content: "Right tooltip",
        side: "right",
        children: <button>Right</button>,
    },
};
export const Large = {
    args: {
        content: "Large tooltip",
        size: "lg",
        children: <button>Large</button>,
    },
};
