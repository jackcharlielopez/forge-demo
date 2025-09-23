import * as React from "react";
import { accordionItemVariants, AccordionItemVariants } from "./variants";
import { cn } from "../../utils/cn";

export type AccordionItem = {
  label: React.ReactNode;
  value: string;
  content: React.ReactNode;
  disabled?: boolean;
};

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  items: AccordionItem[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  multiple?: boolean;
  size?: AccordionItemVariants["size"];
};

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items,
      value,
      defaultValue,
      onChange,
      multiple = false,
      size = "md",
      className,
      ...props
    },
    ref,
  ) => {
    const [openItems, setOpenItems] = React.useState<string[]>(
      defaultValue || [],
    );
    const controlled = value !== undefined;
    const current = controlled ? value! : openItems;

    const handleToggle = (val: string, disabled?: boolean) => {
      if (disabled) return;
      let next: string[];
      if (multiple) {
        next = current.includes(val)
          ? current.filter((v) => v !== val)
          : [...current, val];
      } else {
        next = current.includes(val) ? [] : [val];
      }
      if (!controlled) setOpenItems(next);
      onChange?.(next);
    };

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {items.map((item) => {
          const isOpen = current.includes(item.value);
          return (
            <div key={item.value} className={accordionItemVariants({ size })}>
              <button
                type="button"
                className={cn(
                  "w-full flex justify-between items-center py-2 px-4 focus:outline-none transition-colors",
                  isOpen ? "bg-gray-100" : "bg-white",
                  item.disabled && "opacity-50 cursor-not-allowed",
                )}
                aria-expanded={isOpen}
                aria-controls={`panel-${item.value}`}
                disabled={item.disabled}
                onClick={() => handleToggle(item.value, item.disabled)}
              >
                <span>{item.label}</span>
                <span className="ml-2">{isOpen ? "−" : "+"}</span>
              </button>
              <div
                id={`panel-${item.value}`}
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  isOpen ? "max-h-96 py-2 px-4" : "max-h-0 p-0",
                )}
                hidden={!isOpen}
                role="region"
                aria-labelledby={`accordion-${item.value}`}
              >
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);
Accordion.displayName = "Accordion";
