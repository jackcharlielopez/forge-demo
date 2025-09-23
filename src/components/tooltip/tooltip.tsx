import * as React from "react";
import { tooltipVariants, TooltipVariants } from "./variants";
import { cn } from "../../utils/cn";

type TooltipProps = React.HTMLAttributes<HTMLDivElement> & {
  content: React.ReactNode;
  open?: boolean;
  side?: TooltipVariants["side"];
  size?: TooltipVariants["size"];
  delay?: number;
  children: React.ReactNode;
};

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      open: controlledOpen,
      side = "top",
      size = "md",
      delay = 0,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const timeout = React.useRef<number>();

    const show = () => {
      timeout.current = window.setTimeout(() => setOpen(true), delay);
    };
    const hide = () => {
      clearTimeout(timeout.current);
      setOpen(false);
    };

    const isOpen = controlledOpen !== undefined ? controlledOpen : open;

    return (
      <div
        className="relative inline-block"
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        tabIndex={0}
        {...props}
        ref={ref}
      >
        {children}
        {isOpen && (
          <div
            className={cn(
              "absolute",
              side === "top" && "left-1/2 -translate-x-1/2 bottom-full",
              side === "bottom" && "left-1/2 -translate-x-1/2 top-full",
              side === "left" && "right-full top-1/2 -translate-y-1/2",
              side === "right" && "left-full top-1/2 -translate-y-1/2",
              tooltipVariants({ side, size }),
              className
            )}
            role="tooltip"
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);
Tooltip.displayName = "Tooltip";
