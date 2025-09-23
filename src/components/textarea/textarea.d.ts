import React from "react";
import { type VariantProps } from "class-variance-authority";
import { textareaVariants } from "./variants.js";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
    error?: boolean;
    success?: boolean;
}
export declare const Textarea: any;
