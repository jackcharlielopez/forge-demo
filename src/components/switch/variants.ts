import { cva } from "class-variance-authority";

export const switchVariants = cva(
  [
    "relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      checked: {
        true: "bg-primary",
        false: "bg-input",
      },
      error: {
        true: "bg-destructive",
        false: "",
      },
      success: {
        true: "bg-green-500",
        false: "",
      },
    },
    defaultVariants: {
      checked: false,
      error: false,
      success: false,
    },
  },
);
