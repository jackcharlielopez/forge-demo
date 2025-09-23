import React from "react";
import { selectVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";
export const Select = React.forwardRef(({ className, variant, size, error, success, options, ...props }, ref) => {
    let computedVariant = variant;
    if (error)
        computedVariant = "error";
    else if (success)
        computedVariant = "success";
    return (<select ref={ref} className={cn(selectVariants({ variant: computedVariant, size, className }))} aria-invalid={!!error} {...props}>
        {options.map((opt) => (<option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>))}
      </select>);
});
Select.displayName = "Select";
