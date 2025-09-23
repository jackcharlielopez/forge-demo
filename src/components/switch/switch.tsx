import React from "react";
import { type VariantProps } from "class-variance-authority";
import { switchVariants } from "./variants";
import { cn } from "../../utils/cn";

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onChange">, VariantProps<typeof switchVariants> {
  checked?: boolean;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked = false, error, success, disabled, onChange, ...props }, ref) => {
    const handleClick = () => {
      if (disabled) return;
      onChange?.(!checked);
    };
    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-invalid={!!error}
        disabled={disabled}
        className={cn(switchVariants({ checked, error, success, className }))}
        onClick={handleClick}
        {...props}
      >
        <span
          className={cn(
            "inline-block w-4 h-4 bg-white rounded-full shadow transform transition-transform",
            checked ? "translate-x-5" : "translate-x-1"
          )}
        />
      </button>
    );
  }
);

Switch.displayName = "Switch";
