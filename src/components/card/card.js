import React from "react";
import { cardVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";
export const Card = React.forwardRef(({ className, shadow, border, background, ...props }, ref) => {
    return (<div ref={ref} className={cn(cardVariants({ shadow, border, background, className }))} {...props}/>);
});
Card.displayName = "Card";
