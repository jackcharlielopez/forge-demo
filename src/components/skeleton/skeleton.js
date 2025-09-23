import * as React from "react";
import { skeletonVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";
export const Skeleton = React.forwardRef(({ shape = "rect", size = "md", className, ...props }, ref) => (<div ref={ref} className={cn(skeletonVariants({ shape, size }), className)} {...props}/>));
Skeleton.displayName = "Skeleton";
