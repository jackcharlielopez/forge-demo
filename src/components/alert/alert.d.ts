import React from "react";
import { type VariantProps } from "class-variance-authority";
import { alertVariants } from "./variants.js";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    icon?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
}
export declare const Alert: any;
