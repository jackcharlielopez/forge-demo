import React from "react";
import { badgeVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";
export const Badge = React.forwardRef(({ className, color, shape, ...props }, ref) => {
    return (<span ref={ref} className={cn(badgeVariants({ color, shape, className }))} {...props}/>);
});
Badge.displayName = "Badge";
