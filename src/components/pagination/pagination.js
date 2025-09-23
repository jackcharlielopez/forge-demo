import * as React from "react";
import { paginationVariants, pageButtonVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";
function getPages(current, total) {
    const pages = [];
    for (let i = 1; i <= total; i++) {
        if (i === 1 ||
            i === total ||
            (i >= current - 1 && i <= current + 1)) {
            pages.push(i);
        }
        else if ((i === current - 2 && current > 3) ||
            (i === current + 2 && current < total - 2)) {
            pages.push("...");
        }
    }
    return pages.filter((v, i, arr) => v !== "..." || arr[i - 1] !== "...");
}
export const Pagination = React.forwardRef(({ page, pageCount, onPageChange, size = "md", showEdges = true, className, ...props }, ref) => {
    const pages = getPages(page, pageCount);
    return (<div ref={ref} className={cn(paginationVariants({ size }), className)} {...props}>
        {showEdges && (<button type="button" className={pageButtonVariants({ disabled: page === 1 })} onClick={() => onPageChange(1)} disabled={page === 1} aria-label="First page">
            «
          </button>)}
        <button type="button" className={pageButtonVariants({ disabled: page === 1 })} onClick={() => onPageChange(page - 1)} disabled={page === 1} aria-label="Previous page">
          ‹
        </button>
        {pages.map((p, i) => p === "..." ? (<span key={i} className="px-2 select-none">…</span>) : (<button key={p} type="button" className={pageButtonVariants({ active: p === page })} onClick={() => onPageChange(Number(p))} aria-current={p === page ? "page" : undefined}>
              {p}
            </button>))}
        <button type="button" className={pageButtonVariants({ disabled: page === pageCount })} onClick={() => onPageChange(page + 1)} disabled={page === pageCount} aria-label="Next page">
          ›
        </button>
        {showEdges && (<button type="button" className={pageButtonVariants({ disabled: page === pageCount })} onClick={() => onPageChange(pageCount)} disabled={page === pageCount} aria-label="Last page">
            »
          </button>)}
      </div>);
});
Pagination.displayName = "Pagination";
