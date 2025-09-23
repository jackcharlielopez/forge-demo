import * as React from "react";
import {
  breadcrumbsVariants,
  breadcrumbItemVariants,
  BreadcrumbsVariants,
} from "./variants";
import { cn } from "../../utils/cn";

export type Breadcrumb = {
  label: React.ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
};

type BreadcrumbsProps = React.HTMLAttributes<HTMLElement> & {
  items: Breadcrumb[];
  size?: BreadcrumbsVariants["size"];
  separator?: React.ReactNode;
};

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, size = "md", separator = "/", className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(breadcrumbsVariants({ size }), className)}
        aria-label="Breadcrumb"
        {...props}
      >
        {items.map((item, i) => (
          <React.Fragment key={i}>
            {item.href && !item.active ? (
              <a
                href={item.href}
                className={breadcrumbItemVariants({ active: false })}
                onClick={item.onClick}
              >
                {item.label}
              </a>
            ) : (
              <span
                className={breadcrumbItemVariants({ active: !!item.active })}
                aria-current={item.active ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
            {i < items.length - 1 && (
              <span className="select-none opacity-60">{separator}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    );
  },
);
Breadcrumbs.displayName = "Breadcrumbs";
