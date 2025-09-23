import { cva } from "class-variance-authority";
export const accordionItemVariants = cva("border-b border-gray-200", {
    variants: {
        size: {
            sm: "text-sm py-2",
            md: "text-base py-3",
            lg: "text-lg py-4",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
