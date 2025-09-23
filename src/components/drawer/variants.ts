import { cva, type VariantProps } from "class-variance-authority";

export const drawerVariants = cva(
  "fixed inset-0 z-50 flex bg-black/50 transition-opacity",
  {
    variants: {
      side: {
        left: "justify-start",
        right: "justify-end",
        top: "items-start",
        bottom: "items-end",
      },
      size: {
        sm: "w-64 h-full",
        md: "w-96 h-full",
        lg: "w-[32rem] h-full",
        full: "w-full h-full",
      },
    },
    defaultVariants: {
      side: "right",
      size: "md",
    },
  }
);

export type DrawerVariants = VariantProps<typeof drawerVariants>;
