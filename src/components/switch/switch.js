import React from "react";
import { switchVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";
export const Switch = React.forwardRef(({ className, checked = false, error, success, disabled, onChange, ...props }, ref) => {
    const handleClick = (e) => {
        if (disabled)
            return;
        onChange?.(!checked);
    };
    return (<button ref={ref} type="button" role="switch" aria-checked={checked} aria-invalid={!!error} disabled={disabled} className={cn(switchVariants({ checked, error, success, className }))} onClick={handleClick} {...props}>
        <span className={cn("inline-block w-4 h-4 bg-white rounded-full shadow transform transition-transform", checked ? "translate-x-5" : "translate-x-1")}/>
      </button>);
});
Switch.displayName = "Switch";
