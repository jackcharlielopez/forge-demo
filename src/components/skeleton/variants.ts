import { cva, type VariantProps } from "class-variance-authority";

export const skeletonVariants = cva(
  "animate-pulse bg-gray-200 rounded",
  {
    variants: {
      shape: {
        rect: "",
        circle: "rounded-full",
      },
      size: {
        sm: "h-4 w-16",
        md: "h-6 w-32",
        lg: "h-8 w-48",
      },
    },
    defaultVariants: {
      shape: "rect",
      size: "md",
    },
  }
);

export type SkeletonVariants = VariantProps<typeof skeletonVariants>;
