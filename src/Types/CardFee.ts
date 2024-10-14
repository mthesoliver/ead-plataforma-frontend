import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { TaxMethod } from "Ead/Enum/TaxMethods";
import { ReactNode } from "react";

export type CardFeeType = {
    title?: string;
    givenIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> | null,
    feeValues?: string;
    release?: string;
    size?: number;
}

export type CardFeeContainerType = {
    children: ReactNode;
    direction?: string;
}

export type CardFeeInner = {
    children: ReactNode;
    fee?: TaxMethod;
    aditional?: string;
}