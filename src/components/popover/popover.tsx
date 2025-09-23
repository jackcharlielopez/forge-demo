import * as React from "react";
import { popoverVariants, PopoverVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";

type PopoverProps = React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: PopoverVariants["side"];
  size?: PopoverVariants["size"];
  trigger: React.ReactElement;
  children: React.ReactNode;
};

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    { open: controlledOpen, onOpenChange, side = "bottom", size = "md", trigger, children, className, ...props },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const isOpen = controlledOpen !== undefined ? controlledOpen : open;

    const handleOpen = () => {
      setOpen(true);
      onOpenChange?.(true);
    };
    const handleClose = () => {
      setOpen(false);
      onOpenChange?.(false);
    };

    return (
      <div className="relative inline-block" ref={ref} {...props}>
        {React.cloneElement(trigger, {
          onClick: () => (isOpen ? handleClose() : handleOpen()),
          'aria-haspopup': 'dialog',
          'aria-expanded': isOpen,
        })}
        {isOpen && (
          <div
            className={cn(
              "absolute",
              side === "top" && "left-1/2 -translate-x-1/2 bottom-full",
              side === "bottom" && "left-1/2 -translate-x-1/2 top-full",
              side === "left" && "right-full top-1/2 -translate-y-1/2",
              side === "right" && "left-full top-1/2 -translate-y-1/2",
              popoverVariants({ side, size }),
              className
            )}
            role="dialog"
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);
Popover.displayName = "Popover";
