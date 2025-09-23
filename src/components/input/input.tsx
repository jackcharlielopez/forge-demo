import React from "react";
import { type VariantProps } from "class-variance-authority";
import { inputVariants } from "./variants";
import { cn } from "../../utils/cn";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, Omit<VariantProps<typeof inputVariants>, "size"> {
  uiSize?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
  error?: boolean;
  success?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, uiSize, error, success, ...props }, ref) => {
    let computedVariant = variant;
    if (error) computedVariant = "error";
    else if (success) computedVariant = "success";
    return (
      <input
        ref={ref}
  className={cn(inputVariants({ variant: computedVariant, size: uiSize, className }))}
        aria-invalid={!!error}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
