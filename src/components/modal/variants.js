import { cva } from "class-variance-authority";
export const modalVariants = cva("fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity", {
    variants: {
        size: {
            sm: "w-full max-w-sm",
            md: "w-full max-w-md",
            lg: "w-full max-w-lg",
            xl: "w-full max-w-xl",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
