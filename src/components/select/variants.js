import { cva } from "class-variance-authority";
export const selectVariants = cva([
    "block w-full rounded-md border bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors appearance-none",
], {
    variants: {
        variant: {
            default: "border-input",
            error: "border-destructive text-destructive",
            success: "border-green-500 text-green-700",
        },
        size: {
            sm: "h-8 text-xs",
            md: "h-10 text-sm",
            lg: "h-12 text-base",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});
