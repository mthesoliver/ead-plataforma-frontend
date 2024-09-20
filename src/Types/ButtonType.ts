import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { ButtonHTMLAttributes } from "react";

export enum ButtonColor {
    PRIMARY = 'primary',
    LIGHT = 'light'
}

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: any,
    givenIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> | null,
    givenClass?: string,
    btnColor?: ButtonColor | string;
    rounded?: boolean;
    link?: string;
}