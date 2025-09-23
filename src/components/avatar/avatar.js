import React from "react";
import { avatarVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";
export const Avatar = React.forwardRef(({ className, size, shape, src, alt, fallback, children, ...props }, ref) => {
    const [imgError, setImgError] = React.useState(false);
    return (<span ref={ref} className={cn(avatarVariants({ size, shape, className }))} {...props}>
        {src && !imgError ? (<img src={src} alt={alt} className="w-full h-full object-cover" onError={() => setImgError(true)}/>) : fallback ? (fallback) : (children)}
      </span>);
});
Avatar.displayName = "Avatar";
