import React from "react";
import { type VariantProps } from "class-variance-authority";
import { checkboxVariants } from "./variants.js";
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">, VariantProps<typeof checkboxVariants> {
    error?: boolean;
    success?: boolean;
    indeterminate?: boolean;
}
export declare const Checkbox: any;
