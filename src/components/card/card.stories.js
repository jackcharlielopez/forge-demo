import { Card } from "./card.js";
const meta = {
    title: "UI/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        children: "This is a card.",
    },
};
export const ShadowLg = {
    args: {
        shadow: "lg",
        children: "Large shadow card.",
    },
};
export const BorderAccent = {
    args: {
        border: "accent",
        children: "Accent border card.",
    },
};
export const BackgroundAccent = {
    args: {
        background: "accent",
        children: "Accent background card.",
    },
};
