import * as React from "react";
import {
  dropdownVariants,
  dropdownItemVariants,
  DropdownVariants,
} from "./variants";
import { cn } from "../../utils/cn";

type DropdownItem = {
  label: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
};

type DropdownProps = React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: React.ReactElement;
  items: DropdownItem[];
  size?: DropdownVariants["size"];
  align?: DropdownVariants["align"];
};

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      open: controlledOpen,
      onOpenChange,
      trigger,
      items,
      size = "md",
      align = "left",
      className,
      ...props
    },
    ref,
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
          "aria-haspopup": "menu",
          "aria-expanded": isOpen,
        })}
        {isOpen && (
          <div
            className={cn(
              "absolute mt-2",
              dropdownVariants({ size, align }),
              className,
            )}
            role="menu"
          >
            {items.map((item, i) => (
              <button
                key={i}
                type="button"
                className={dropdownItemVariants({ danger: item.danger })}
                disabled={item.disabled}
                onClick={() => {
                  item.onClick?.();
                  handleClose();
                }}
                role="menuitem"
                tabIndex={item.disabled ? -1 : 0}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  },
);
Dropdown.displayName = "Dropdown";
