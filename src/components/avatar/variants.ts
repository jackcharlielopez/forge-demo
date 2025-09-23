import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  [
    "inline-flex items-center justify-center bg-muted text-muted-foreground overflow-hidden select-none",
  ],
  {
    variants: {
      size: {
        sm: "w-8 h-8 text-sm",
        md: "w-12 h-12 text-base",
        lg: "w-16 h-16 text-lg",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
    },
  }
);
