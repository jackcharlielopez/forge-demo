import * as React from "react";
export type Breadcrumb = {
    label: React.ReactNode;
    href?: string;
    active?: boolean;
    onClick?: () => void;
};
export declare const Breadcrumbs: any;
