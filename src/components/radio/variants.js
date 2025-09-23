import { cva } from "class-variance-authority";
export const radioVariants = cva([
    "relative inline-flex items-center justify-center w-5 h-5 rounded-full border bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
], {
    variants: {
        variant: {
            default: "border-input",
            error: "border-destructive text-destructive",
            success: "border-green-500 text-green-700",
        },
        size: {
            sm: "w-4 h-4",
            md: "w-5 h-5",
            lg: "w-6 h-6",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});
