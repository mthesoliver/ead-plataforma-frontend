'use client'

import { Box, Typography } from "@mui/material";
import styles from "Ead/Styles/_hero-text.module.scss";
import { ColorMode, HeroTextType } from "Ead/Types/HeroTextType";
import { useLayoutEffect, useState } from "react";



function HeroTextCustom({ title, sub, titleSize, colorMode, align }: Readonly<HeroTextType>) {
    const [mode, setColorMode] = useState<string[]>([styles.main_tittle_color, styles.sub_title]);

    useLayoutEffect(() => {
        handleColorMode(colorMode as ColorMode);
    }, [colorMode]);

    const handleColorMode = (colorMode: ColorMode | undefined) => {
        if (colorMode === ColorMode.lightColor) {
            setColorMode([styles.main_tittle_color_light, styles.sub_title_light_mode]);
        } else {
            return;
        }
    }

    return (
        <Box className="my-4 container-fluid d-flex justify-content-evenly flex-column">
            <Typography gutterBottom className={'fw-semibold ' + mode[1]} sx={{ fontSize: 36, lineHeight: 1, textAlign: align ?? "center" }}>
                {title}
            </Typography>
            <Typography gutterBottom className={'fw-bolder ' + mode[0]} sx={{ fontSize: titleSize ?? 56, textAlign: align ?? "center" }}>
                {sub}
            </Typography>
        </Box>
    )
}

export default HeroTextCustom;