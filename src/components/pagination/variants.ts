import { cva, type VariantProps } from "class-variance-authority";

export const paginationVariants = cva(
  "inline-flex items-center gap-1",
  {
    variants: {
      size: {
        sm: "text-sm gap-0.5",
        md: "text-base gap-1",
        lg: "text-lg gap-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const pageButtonVariants = cva(
  "px-3 py-1 rounded border border-transparent transition-colors focus:outline-none",
  {
    variants: {
      active: {
        true: "bg-blue-600 text-white border-blue-600",
        false: "bg-white text-gray-700 hover:bg-gray-100",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      active: false,
      disabled: false,
    },
  }
);

export type PaginationVariants = VariantProps<typeof paginationVariants>;
export type PageButtonVariants = VariantProps<typeof pageButtonVariants>;
