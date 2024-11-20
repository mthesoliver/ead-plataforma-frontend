import { ReactNode } from "react";

export type PriceType = {
    children: ReactNode
    badge?: string;
    typeOfpay?: string;
    listchildren?: ReactNode
    btnText?: string;
    btnLink?: string;
    plans?: string;
    color?: string;
    column?: boolean;
    opts?: { description: string, smallDescription?: string };
    initialPos?: number;
    anualValue?: string
}