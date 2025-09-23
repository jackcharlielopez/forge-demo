import * as React from "react";
import { modalVariants, ModalVariants } from "./variants";
import { cn } from "../../utils/cn";

type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  onClose: () => void;
  size?: ModalVariants["size"];
  title?: React.ReactNode;
  children: React.ReactNode;
};

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    { open, onClose, size = "md", title, children, className, ...props },
    ref
  ) => {
    if (!open) return null;
    return (
      <div className={modalVariants()}>
        <div
          className={cn(
            "bg-white rounded-lg shadow-lg p-6 relative",
            modalVariants({ size }),
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
          {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
          <div>{children}</div>
        </div>
      </div>
    );
  }
);
Modal.displayName = "Modal";
