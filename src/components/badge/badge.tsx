import React from "react";
import { type VariantProps } from "class-variance-authority";
import { badgeVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, color, shape, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ color, shape, className }))}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
