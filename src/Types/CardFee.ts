import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactNode } from "react";

export type CardFeeType = {
    title: string;
    givenIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> | null,
    feeValues: string;
    release: string;
    size?: number;
}

export type CardFeeContainerType = {
    children: ReactNode;
    direction?: string;
}