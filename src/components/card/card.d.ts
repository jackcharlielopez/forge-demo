import React from "react";
import { type VariantProps } from "class-variance-authority";
import { cardVariants } from "./variants.js";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
export declare const Card: any;
