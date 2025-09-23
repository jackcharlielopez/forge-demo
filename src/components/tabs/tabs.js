import * as React from "react";
import { tabsListVariants, tabTriggerVariants } from "./variants.js";
import { cn } from "../../utils/cn.js";
export const Tabs = React.forwardRef(({ tabs, value, defaultValue, onChange, size = "md", className, children, ...props }, ref) => {
    const [selected, setSelected] = React.useState(defaultValue || tabs[0]?.value);
    const controlled = value !== undefined;
    const current = controlled ? value : selected;
    const handleTabClick = (val, disabled) => {
        if (disabled)
            return;
        if (!controlled)
            setSelected(val);
        onChange?.(val);
    };
    return (<div ref={ref} className={cn("w-full", className)} {...props}>
        <div className={tabsListVariants({ size })} role="tablist">
          {tabs.map((tab) => (<button key={tab.value} type="button" className={tabTriggerVariants({
                active: current === tab.value,
                size,
            })} role="tab" aria-selected={current === tab.value} aria-disabled={tab.disabled} tabIndex={tab.disabled ? -1 : 0} disabled={tab.disabled} onClick={() => handleTabClick(tab.value, tab.disabled)}>
              {tab.label}
            </button>))}
        </div>
        <div className="pt-4" role="tabpanel">
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child))
                return null;
            return child.props.value === current ? child : null;
        })}
        </div>
      </div>);
});
Tabs.displayName = "Tabs";
export const TabPanel = ({ value, children }) => {
    // This is a helper for usage, actual rendering is handled in Tabs
    return <>{children}</>;
};
