import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  [
    "block w-full rounded-md border bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-none",
  ],
  {
    variants: {
      variant: {
        default: "border-input",
        error: "border-destructive text-destructive placeholder:text-destructive-foreground",
        success: "border-green-500 text-green-700 placeholder:text-green-600",
      },
      size: {
        sm: "h-20 text-xs",
        md: "h-32 text-sm",
        lg: "h-48 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
