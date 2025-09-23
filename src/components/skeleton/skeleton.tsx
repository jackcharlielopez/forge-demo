import * as React from "react";
import { skeletonVariants, SkeletonVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  shape?: SkeletonVariants["shape"];
  size?: SkeletonVariants["size"];
};

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    { shape = "rect", size = "md", className, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(skeletonVariants({ shape, size }), className)}
      {...props}
    />
  )
);
Skeleton.displayName = "Skeleton";
