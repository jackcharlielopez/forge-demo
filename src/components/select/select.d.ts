import React from "react";
import { type VariantProps } from "class-variance-authority";
import { selectVariants } from "./variants.js";
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, VariantProps<typeof selectVariants> {
    options: SelectOption[];
    error?: boolean;
    success?: boolean;
}
export declare const Select: any;
