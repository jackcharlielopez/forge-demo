import * as React from "react";
import {
  tabsListVariants,
  tabTriggerVariants,
  TabsListVariants,
} from "./variants";
import { cn } from "../../utils/cn";

export type Tab = {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
};

type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  tabs: Tab[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: TabsListVariants["size"];
  children?: React.ReactNode;
};

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      tabs,
      value,
      defaultValue,
      onChange,
      size = "md",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [selected, setSelected] = React.useState(
      defaultValue || tabs[0]?.value,
    );
    const controlled = value !== undefined;
    const current = controlled ? value : selected;

    const handleTabClick = (val: string, disabled?: boolean) => {
      if (disabled) return;
      if (!controlled) setSelected(val);
      onChange?.(val);
    };

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className={tabsListVariants({ size })} role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              className={tabTriggerVariants({
                active: current === tab.value,
                size,
              })}
              role="tab"
              aria-selected={current === tab.value}
              aria-disabled={tab.disabled}
              tabIndex={tab.disabled ? -1 : 0}
              disabled={tab.disabled}
              onClick={() => handleTabClick(tab.value, tab.disabled)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="pt-4" role="tabpanel">
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return null;
            // Only render if child.props.value matches current
            if ("value" in child.props && child.props.value === current) {
              return child;
            }
            return null;
          })}
        </div>
      </div>
    );
  },
);
Tabs.displayName = "Tabs";

export type TabPanelProps = {
  value: string;
  children: React.ReactNode;
};

export const TabPanel = (props: TabPanelProps) => {
  // This is a helper for usage, actual rendering is handled in Tabs
  // The value prop is used by Tabs via child.props.value
  return <>{props.children}</>;
};
