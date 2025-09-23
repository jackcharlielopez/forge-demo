import * as React from "react";
export type Step = {
    label: React.ReactNode;
    value: string;
    completed?: boolean;
    disabled?: boolean;
};
export declare const Stepper: any;
