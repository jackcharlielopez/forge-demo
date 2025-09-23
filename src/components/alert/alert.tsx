import React from "react";
import { type VariantProps } from "class-variance-authority";
import { alertVariants } from "./variants";
import { cn } from "../../utils/cn";

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "description">,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, type, icon, title, description, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(alertVariants({ type, className }))}
        {...props}
      >
        {icon && <span className="mt-1">{icon}</span>}
        <div>
          {title && <div className="font-semibold mb-1">{title}</div>}
          {description && (
            <div className="text-xs text-muted-foreground mb-1">
              {description}
            </div>
          )}
          {children}
        </div>
      </div>
    );
  },
);

Alert.displayName = "Alert";
