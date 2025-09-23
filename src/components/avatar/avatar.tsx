import React from "react";
import { type VariantProps } from "class-variance-authority";
import { avatarVariants } from "./variants";
import { cn } from "../../utils/cn";

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, shape, src, alt, fallback, children, ...props }, ref) => {
    const [imgError, setImgError] = React.useState(false);
    return (
      <span
        ref={ref}
        className={cn(avatarVariants({ size, shape, className }))}
        {...props}
      >
        {src && !imgError ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : fallback ? (
          fallback
        ) : (
          children
        )}
      </span>
    );
  },
);

Avatar.displayName = "Avatar";
