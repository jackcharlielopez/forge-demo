import { cva } from "class-variance-authority";

export const alertVariants = cva(
  ["relative w-full rounded-lg p-4 flex items-start gap-3 border text-sm"],
  {
    variants: {
      type: {
        info: "bg-blue-50 border-blue-200 text-blue-900",
        success: "bg-green-50 border-green-200 text-green-900",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
        error: "bg-destructive border-destructive text-destructive-foreground",
        default: "bg-background border-input text-foreground",
      },
    },
    defaultVariants: {
      type: "default",
    },
  },
);
