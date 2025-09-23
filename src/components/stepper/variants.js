import { cva } from "class-variance-authority";
export const stepperVariants = cva("flex items-center gap-4", {
    variants: {
        size: {
            sm: "gap-2 text-sm",
            md: "gap-4 text-base",
            lg: "gap-6 text-lg",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
export const stepVariants = cva("flex flex-col items-center relative", {
    variants: {
        active: {
            true: "text-blue-600 font-semibold",
            false: "text-gray-400",
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
