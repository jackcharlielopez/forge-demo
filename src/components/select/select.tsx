import React from "react";
import { type VariantProps } from "class-variance-authority";
import { selectVariants } from "./variants";
import { cn } from "../../utils/cn";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">, Omit<VariantProps<typeof selectVariants>, "size"> {
  uiSize?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
  options: SelectOption[];
  error?: boolean;
  success?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, uiSize, error, success, options, ...props }, ref) => {
    let computedVariant = variant;
    if (error) computedVariant = "error";
    else if (success) computedVariant = "success";
    return (
      <select
        ref={ref}
  className={cn(selectVariants({ variant: computedVariant, size: uiSize, className }))}
        aria-invalid={!!error}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";
