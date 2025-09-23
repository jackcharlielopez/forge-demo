import { cva, type VariantProps } from "class-variance-authority";

export const popoverVariants = cva(
  "z-50 rounded bg-white border border-gray-200 shadow-lg p-4 transition-opacity duration-200",
  {
    variants: {
      side: {
        top: "mb-2",
        right: "ml-2",
        bottom: "mt-2",
        left: "mr-2",
      },
      size: {
        sm: "w-40",
        md: "w-64",
        lg: "w-96",
      },
    },
    defaultVariants: {
      side: "bottom",
      size: "md",
    },
  },
);

export type PopoverVariants = VariantProps<typeof popoverVariants>;
