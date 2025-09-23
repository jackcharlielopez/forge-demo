import * as React from "react";
export type Tab = {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
};
export declare const Tabs: any;
export type TabPanelProps = {
    value: string;
    children: React.ReactNode;
};
export declare const TabPanel: ({ value, children }: TabPanelProps) => any;
