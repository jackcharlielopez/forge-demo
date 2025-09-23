import { cva } from "class-variance-authority";
export const timelineVariants = cva("flex flex-col gap-6 relative", {
    variants: {
        size: {
            sm: "gap-3",
            md: "gap-6",
            lg: "gap-10",
        },
        align: {
            left: "items-start",
            center: "items-center",
            right: "items-end",
        },
    },
    defaultVariants: {
        size: "md",
        align: "left",
    },
});
export const timelineItemVariants = cva("flex items-start gap-4 relative", {
    variants: {
        active: {
            true: "text-blue-600 font-semibold",
            false: "text-gray-700",
        },
        completed: {
            true: "text-green-600",
            false: "",
        },
    },
    defaultVariants: {
        active: false,
        completed: false,
    },
});
