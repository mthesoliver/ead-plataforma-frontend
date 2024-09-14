export enum ColorMode {
    lightColor = "light"
}

export type HeroTextType = {
    title: string,
    sub: string,
    titleSize?: number | null,
    align?: string;
    colorMode?: ColorMode | string
}