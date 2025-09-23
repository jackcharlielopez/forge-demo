import { Avatar } from "./avatar.js";
const meta = {
    title: "UI/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        children: "A",
    },
};
export const WithImage = {
    args: {
        src: "/avatar.jpg",
        alt: "User",
    },
};
export const Fallback = {
    args: {
        fallback: "U",
    },
};
export const Large = {
    args: {
        size: "lg",
        children: "L",
    },
};
export const Square = {
    args: {
        shape: "square",
        children: "S",
    },
};
