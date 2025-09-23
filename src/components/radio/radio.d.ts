import React from "react";
import { type VariantProps } from "class-variance-authority";
import { radioVariants } from "./variants.js";
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">, VariantProps<typeof radioVariants> {
    error?: boolean;
    success?: boolean;
}
export declare const Radio: any;
