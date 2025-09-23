import * as React from "react";
export type TimelineItem = {
    label: React.ReactNode;
    content?: React.ReactNode;
    active?: boolean;
    completed?: boolean;
    icon?: React.ReactNode;
};
export declare const Timeline: any;
