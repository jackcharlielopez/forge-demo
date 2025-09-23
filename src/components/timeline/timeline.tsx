import * as React from "react";
import { timelineVariants, timelineItemVariants, TimelineVariants } from "./variants";
import { cn } from "../../utils/cn";

export type TimelineItem = {
  label: React.ReactNode;
  content?: React.ReactNode;
  active?: boolean;
  completed?: boolean;
  icon?: React.ReactNode;
};

type TimelineProps = React.HTMLAttributes<HTMLDivElement> & {
  items: TimelineItem[];
  size?: TimelineVariants["size"];
  align?: TimelineVariants["align"];
};

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  (
    { items, size = "md", align = "left", className, ...props },
    ref
  ) => {
    return (
      <div ref={ref} className={cn(timelineVariants({ size, align }), className)} {...props}>
        {items.map((item, i) => (
          <div key={i} className={timelineItemVariants({ active: item.active, completed: item.completed })}>
            <div className="flex flex-col items-center mr-4 relative">
              <span
                className={cn(
                  "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                  item.completed ? "border-green-600 bg-green-100" : item.active ? "border-blue-600 bg-blue-100" : "border-gray-300 bg-white"
                )}
              >
                {item.icon || (item.completed ? "✓" : i + 1)}
              </span>
              {i < items.length - 1 && (
                <span className="w-0.5 flex-1 bg-gray-300 mt-1" />
              )}
            </div>
            <div>
              <div className="font-medium mb-1">{item.label}</div>
              {item.content && <div className="text-gray-500 text-sm">{item.content}</div>}
            </div>
          </div>
        ))}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";
