import { cva } from "class-variance-authority";
export const progressVariants = cva("relative w-full h-2 bg-gray-200 rounded overflow-hidden", {
    variants: {
        size: {
            sm: "h-1",
            md: "h-2",
            lg: "h-4",
        },
        color: {
            primary: "bg-blue-200",
            secondary: "bg-gray-200",
            success: "bg-green-200",
            danger: "bg-red-200",
        },
    },
    defaultVariants: {
        size: "md",
        color: "primary",
    },
});
export const progressBarVariants = cva("absolute left-0 top-0 h-full transition-all duration-300", {
    variants: {
        color: {
            primary: "bg-blue-600",
            secondary: "bg-gray-500",
            success: "bg-green-600",
            danger: "bg-red-600",
        },
    },
    defaultVariants: {
        color: "primary",
    },
});
