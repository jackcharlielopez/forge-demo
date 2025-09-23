import * as React from "react";
import { menuVariants, menuItemVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";
export const Menu = React.forwardRef(({ open: controlledOpen, onOpenChange, trigger, items, size = "md", className, ...props }, ref) => {
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
    return (<div className="relative inline-block" ref={ref} {...props}>
        {React.cloneElement(trigger, {
            onClick: () => (isOpen ? handleClose() : handleOpen()),
            'aria-haspopup': 'menu',
            'aria-expanded': isOpen,
        })}
        {isOpen && (<div className={cn("absolute left-0 mt-2", menuVariants({ size }), className)} role="menu">
            {items.map((item) => (<button key={item.value} type="button" className={menuItemVariants({ danger: item.danger })} disabled={item.disabled} onClick={() => {
                    item.onClick?.();
                    handleClose();
                }} role="menuitem" tabIndex={item.disabled ? -1 : 0}>
                {item.label}
              </button>))}
          </div>)}
      </div>);
});
Menu.displayName = "Menu";
