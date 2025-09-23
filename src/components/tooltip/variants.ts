import { cva, type VariantProps } from "class-variance-authority";

export const tooltipVariants = cva(
  "z-50 rounded bg-gray-900 px-3 py-1.5 text-xs text-white shadow-md transition-opacity duration-200",
  {
    variants: {
      side: {
        top: "mb-2",
        right: "ml-2",
        bottom: "mt-2",
        left: "mr-2",
      },
      size: {
        sm: "text-xs py-1 px-2",
        md: "text-sm py-1.5 px-3",
        lg: "text-base py-2 px-4",
      },
    },
    defaultVariants: {
      side: "top",
      size: "md",
    },
  },
);

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
