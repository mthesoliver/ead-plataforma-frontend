import { ReactNode } from "react";

export type CtaType = {
    title: string;
    subTitle: string;
    titleSize?: number;
    imagePath?: string;
    children?: ReactNode;
    fontColor?: string;
    border?: boolean;
}