import { cva, type VariantProps } from "class-variance-authority";

export const breadcrumbsVariants = cva(
  "flex items-center gap-2 text-gray-600",
  {
    variants: {
      size: {
        sm: "text-xs gap-1",
        md: "text-sm gap-2",
        lg: "text-base gap-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const breadcrumbItemVariants = cva("inline-flex items-center gap-1", {
  variants: {
    active: {
      true: "font-semibold text-blue-600",
      false: "hover:text-blue-500 cursor-pointer",
    },
  },
  defaultVariants: {
    active: false,
  },
});

export type BreadcrumbsVariants = VariantProps<typeof breadcrumbsVariants>;
export type BreadcrumbItemVariants = VariantProps<
  typeof breadcrumbItemVariants
>;
