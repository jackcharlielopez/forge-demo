import * as React from "react";
import { progressVariants, progressBarVariants, ProgressVariants, ProgressBarVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";

type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
  max?: number;
  size?: ProgressVariants["size"];
  color?: ProgressVariants["color"] & ProgressBarVariants["color"];
  showLabel?: boolean;
};

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    { value, max = 100, size = "md", color = "primary", showLabel = false, className, ...props },
    ref
  ) => {
    const percent = Math.min(Math.max(value, 0), max) / max * 100;
    return (
      <div className={cn(progressVariants({ size, color }), className)} ref={ref} {...props}>
        <div
          className={progressBarVariants({ color })}
          style={{ width: `${percent}%` }}
          aria-valuenow={value}
          aria-valuemax={max}
          aria-valuemin={0}
          role="progressbar"
        />
        {showLabel && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-gray-700">
            {Math.round(percent)}%
          </span>
        )}
      </div>
    );
  }
);
Progress.displayName = "Progress";
