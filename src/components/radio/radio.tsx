import React from "react";
import { type VariantProps } from "class-variance-authority";
import { radioVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">, VariantProps<typeof radioVariants> {
  error?: boolean;
  success?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, variant, size, error, success, ...props }, ref) => {
    let computedVariant = variant;
    if (error) computedVariant = "error";
    else if (success) computedVariant = "success";
    return (
      <input
        ref={ref}
        type="radio"
        className={cn(radioVariants({ variant: computedVariant, size, className }))}
        aria-invalid={!!error}
        {...props}
      />
    );
  }
);

Radio.displayName = "Radio";
