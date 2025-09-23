import * as React from "react";
import { drawerVariants, DrawerVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";

type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  onClose: () => void;
  side?: DrawerVariants["side"];
  size?: DrawerVariants["size"];
  title?: React.ReactNode;
  children: React.ReactNode;
};

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    { open, onClose, side = "right", size = "md", title, children, className, ...props },
    ref
  ) => {
    if (!open) return null;
    return (
      <div className={drawerVariants({ side })}>
        <div
          className={cn(
            "bg-white shadow-lg h-full w-full max-w-full relative flex flex-col",
            drawerVariants({ size }),
            className
          )}
          ref={ref}
          {...props}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Close"
            type="button"
          >
            ×
          </button>
          {title && <h2 className="text-lg font-semibold mb-4 p-4 border-b">{title}</h2>}
          <div className="flex-1 overflow-auto p-4">{children}</div>
        </div>
      </div>
    );
  }
);
Drawer.displayName = "Drawer";
