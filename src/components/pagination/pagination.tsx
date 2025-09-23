import * as React from "react";
import {
  paginationVariants,
  pageButtonVariants,
  PaginationVariants,
} from "./variants";
import { cn } from "../../utils/cn";

type PaginationProps = React.HTMLAttributes<HTMLDivElement> & {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  size?: PaginationVariants["size"];
  showEdges?: boolean;
};

function getPages(current: number, total: number) {
  const pages = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
      pages.push(i);
    } else if (
      (i === current - 2 && current > 3) ||
      (i === current + 2 && current < total - 2)
    ) {
      pages.push("...");
    }
  }
  return pages.filter((v, i, arr) => v !== "..." || arr[i - 1] !== "...");
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      page,
      pageCount,
      onPageChange,
      size = "md",
      showEdges = true,
      className,
      ...props
    },
    ref,
  ) => {
    const pages = getPages(page, pageCount);
    return (
      <div
        ref={ref}
        className={cn(paginationVariants({ size }), className)}
        {...props}
      >
        {showEdges && (
          <button
            type="button"
            className={pageButtonVariants({ disabled: page === 1 })}
            onClick={() => onPageChange(1)}
            disabled={page === 1}
            aria-label="First page"
          >
            «
          </button>
        )}
        <button
          type="button"
          className={pageButtonVariants({ disabled: page === 1 })}
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
        >
          ‹
        </button>
        {pages.map((pageNum, idx) =>
          pageNum === "..." ? (
            <span key={idx} className="px-2 select-none">
              …
            </span>
          ) : (
            <button
              key={
                typeof pageNum === "string"
                  ? `ellipsis-${idx}`
                  : `page-${pageNum}`
              }
              type="button"
              className={pageButtonVariants({ active: pageNum === page })}
              onClick={() => onPageChange(Number(pageNum))}
              aria-current={pageNum === page ? "page" : undefined}
            >
              {pageNum}
            </button>
          ),
        )}
        <button
          type="button"
          className={pageButtonVariants({ disabled: page === pageCount })}
          onClick={() => onPageChange(page + 1)}
          disabled={page === pageCount}
          aria-label="Next page"
        >
          ›
        </button>
        {showEdges && (
          <button
            type="button"
            className={pageButtonVariants({ disabled: page === pageCount })}
            onClick={() => onPageChange(pageCount)}
            disabled={page === pageCount}
            aria-label="Last page"
          >
            »
          </button>
        )}
      </div>
    );
  },
);
Pagination.displayName = "Pagination";
