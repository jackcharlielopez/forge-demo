import React from "react";
import { type VariantProps } from "class-variance-authority";
import { cardVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, shadow, border, background, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ shadow, border, background, className }))}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
