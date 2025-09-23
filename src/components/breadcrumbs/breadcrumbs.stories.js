import { Breadcrumbs } from "./breadcrumbs.js";
const meta = {
    title: "UI/Breadcrumbs",
    component: Breadcrumbs,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const items = [
    { label: "Home", href: "/" },
    { label: "Library", href: "/library" },
    { label: "Data", active: true },
];
export const Default = {
    args: {
        items,
        size: "md",
    },
};
export const Large = {
    args: {
        items,
        size: "lg",
        separator: ">",
    },
};
