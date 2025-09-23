import React from "react";
import { textareaVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";
export const Textarea = React.forwardRef(({ className, variant, size, error, success, ...props }, ref) => {
    let computedVariant = variant;
    if (error)
        computedVariant = "error";
    else if (success)
        computedVariant = "success";
    return (<textarea ref={ref} className={cn(textareaVariants({ variant: computedVariant, size, className }))} aria-invalid={!!error} {...props}/>);
});
Textarea.displayName = "Textarea";
