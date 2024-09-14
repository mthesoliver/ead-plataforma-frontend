'use client'

import { Box, Typography } from "@mui/material";
import styles from "Ead/Styles/_hero-text.module.scss";
import { useEffect, useState } from "react";

interface ColorMode {
    lightColor?: boolean;
}

function HeroTextCustom(props: Readonly<{ title: string, sub: string, titleSize?: number | null, colorMode?: ColorMode }>) {
    const [colorMode, setColorMode] = useState<string[]>([styles.main_tittle_color, styles.sub_title]);

    useEffect(() => {
        handleColorMode(props.colorMode);
    });

    const handleColorMode = (colorMode: ColorMode | undefined) => {
        if (colorMode?.lightColor) {
            setColorMode([styles.main_tittle_color_light, styles.sub_title_light_mode]);
        } else {
            setColorMode([styles.main_tittle_color, styles.sub_title_dark_mode]);
        }
    }

    return (
        <Box className="my-4 container-fluid d-flex justify-content-evenly align-items-center flex-column">
            <Typography gutterBottom className={'fw-semibold ' + colorMode[1]}>
                {props.title}
            </Typography>
            <Typography gutterBottom className={'fw-bolder ' + colorMode[0]} sx={{ fontSize: props.titleSize ? props.titleSize : 56 }}>
                {props.sub}
            </Typography>
        </Box>
    )
}

export default HeroTextCustom;