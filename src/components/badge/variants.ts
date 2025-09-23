import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
  ],
  {
    variants: {
      color: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        error: "bg-destructive text-destructive-foreground",
        info: "bg-blue-100 text-blue-800",
        muted: "bg-muted text-muted-foreground",
      },
      shape: {
        pill: "rounded-full",
        square: "rounded-md",
      },
    },
    defaultVariants: {
      color: "default",
      shape: "pill",
    },
  }
);
