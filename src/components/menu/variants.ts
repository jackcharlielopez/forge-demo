import { cva, type VariantProps } from "class-variance-authority";

export const menuVariants = cva(
  "bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[10rem] z-50",
  {
    variants: {
      size: {
        sm: "text-sm py-1",
        md: "text-base py-2",
        lg: "text-lg py-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const menuItemVariants = cva(
  "w-full text-left px-4 py-2 cursor-pointer transition-colors rounded hover:bg-gray-100 focus:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      active: {
        true: "bg-gray-100",
        false: "",
      },
      danger: {
        true: "text-red-600 hover:bg-red-50 focus:bg-red-50",
        false: "",
      },
    },
    defaultVariants: {
      active: false,
      danger: false,
    },
  },
);

export type MenuVariants = VariantProps<typeof menuVariants>;
export type MenuItemVariants = VariantProps<typeof menuItemVariants>;
