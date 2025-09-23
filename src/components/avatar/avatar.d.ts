import React from "react";
import { type VariantProps } from "class-variance-authority";
import { avatarVariants } from "./variants.js";
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    fallback?: React.ReactNode;
}
export declare const Avatar: any;
