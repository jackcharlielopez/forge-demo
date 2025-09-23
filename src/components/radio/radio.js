import React from "react";
import { radioVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";
export const Radio = React.forwardRef(({ className, variant, size, error, success, ...props }, ref) => {
    let computedVariant = variant;
    if (error)
        computedVariant = "error";
    else if (success)
        computedVariant = "success";
    return (<input ref={ref} type="radio" className={cn(radioVariants({ variant: computedVariant, size, className }))} aria-invalid={!!error} {...props}/>);
});
Radio.displayName = "Radio";
