import React from "react";
import { type VariantProps } from "class-variance-authority";
import { inputVariants } from "./variants.js";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    error?: boolean;
    success?: boolean;
}
export declare const Input: any;
