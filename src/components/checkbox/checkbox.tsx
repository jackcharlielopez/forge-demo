import React from "react";
import { type VariantProps } from "class-variance-authority";
import { checkboxVariants } from "./variants";
import { cn } from "../../utils/cn";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size">, Omit<VariantProps<typeof checkboxVariants>, "size"> {
  uiSize?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
  error?: boolean;
  success?: boolean;
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, uiSize, error, success, indeterminate, ...props }, ref) => {
    let computedVariant = variant;
    if (error) computedVariant = "error";
    else if (success) computedVariant = "success";

    React.useEffect(() => {
      if (ref && typeof ref !== "function" && ref.current) {
        ref.current.indeterminate = !!indeterminate;
      }
    }, [ref, indeterminate]);

    return (
      <input
        ref={ref}
        type="checkbox"
  className={cn(checkboxVariants({ variant: computedVariant, size: uiSize, className }))}
        aria-invalid={!!error}
        aria-checked={indeterminate ? "mixed" : undefined}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
