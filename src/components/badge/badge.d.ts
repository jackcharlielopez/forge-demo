import React from "react";
import { type VariantProps } from "class-variance-authority";
import { badgeVariants } from "./variants.js";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
export declare const Badge: any;
