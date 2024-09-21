import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";

export type CardCustomType = {
    givenIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> | null;
    title: string;
    content: string;
    size?: number;
}