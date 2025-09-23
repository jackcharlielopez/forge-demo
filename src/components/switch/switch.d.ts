import React from "react";
import { type VariantProps } from "class-variance-authority";
import { switchVariants } from "./variants.js";
export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">, VariantProps<typeof switchVariants> {
    checked?: boolean;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}
export declare const Switch: any;
