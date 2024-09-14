import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

export type ButtonType = {
    children: any,
    givenIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> | null,
    givenClass?: string
}