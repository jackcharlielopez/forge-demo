import React from "react";
import { inputVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";
export const Input = React.forwardRef(({ className, variant, size, error, success, ...props }, ref) => {
    let computedVariant = variant;
    if (error)
        computedVariant = "error";
    else if (success)
        computedVariant = "success";
    return (<input ref={ref} className={cn(inputVariants({ variant: computedVariant, size, className }))} aria-invalid={!!error} {...props}/>);
});
Input.displayName = "Input";
