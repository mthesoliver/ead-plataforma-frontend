import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

export enum ButtonColor {
    PRIMARY = 'primary',
    LIGHT = 'light'
}

export type ButtonType = {
    children: any,
    givenIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> | null,
    givenClass?: string,
    btnColor?: ButtonColor | string;
    rounded?: boolean;
}