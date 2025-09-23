import { cva } from "class-variance-authority";
export const tabsListVariants = cva("inline-flex items-center border-b border-gray-200", {
    variants: {
        size: {
            sm: "gap-2 text-sm",
            md: "gap-3 text-base",
            lg: "gap-4 text-lg",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
export const tabTriggerVariants = cva("px-4 py-2 cursor-pointer border-b-2 transition-colors", {
    variants: {
        active: {
            true: "border-blue-600 text-blue-600 font-semibold",
            false: "border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-300",
        },
        size: {
            sm: "text-sm py-1 px-2",
            md: "text-base py-2 px-4",
            lg: "text-lg py-3 px-6",
        },
    },
    defaultVariants: {
        active: false,
        size: "md",
    },
});
