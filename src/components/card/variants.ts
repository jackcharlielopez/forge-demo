import { cva } from "class-variance-authority";

export const cardVariants = cva(
  [
    "rounded-lg p-6 bg-background border transition-shadow",
  ],
  {
    variants: {
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      },
      border: {
        none: "border-0",
        default: "border border-input",
        accent: "border-2 border-primary",
      },
      background: {
        default: "bg-background",
        muted: "bg-muted",
        accent: "bg-primary text-primary-foreground",
      },
    },
    defaultVariants: {
      shadow: "md",
      border: "default",
      background: "default",
    },
  }
);
