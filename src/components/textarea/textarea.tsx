import React from "react";
import { type VariantProps } from "class-variance-authority";
import { textareaVariants } from "./variants";
import { cn } from "../../utils/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
  success?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, error, success, ...props }, ref) => {
    let computedVariant = variant;
    if (error) computedVariant = "error";
    else if (success) computedVariant = "success";
    return (
      <textarea
        ref={ref}
        className={cn(
          textareaVariants({ variant: computedVariant, size, className }),
        )}
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
