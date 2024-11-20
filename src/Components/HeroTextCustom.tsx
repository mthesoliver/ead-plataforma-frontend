'use client'

import { Box, StyledEngineProvider, Typography } from "@mui/material";
import useResize from "Ead/CustomHooks/useResize";
import styles from "Ead/Styles/_hero-text.module.scss";
import { ColorMode, HeroTextType } from "Ead/Types/HeroTextType";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';



function HeroTextCustom({ title, sub, titleSize, colorMode, align }: Readonly<HeroTextType>) {
    const { isMobile } = useResize();
    const [mode, setColorMode] = useState<string[]>([styles.main_tittle_color, styles.sub_title]);
    const heroText = useRef(null);

    const ctaAnimation = () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(heroText.current, {
            y: 300,
            position: "relative",
            opacity: 0,
            scrollTrigger: {
                trigger: heroText.current,
                start: "-650px 100px",
                end: "50px  50px",
                scrub: false,
                //markers: true,
            }
        })
        gsap.to(heroText.current, {
            y: 0,
            position: "relative",
            opacity: 1,
            scrollTrigger: {
                trigger: heroText.current,
                start: "-650px 100px",
                end: "50px  50px",
                scrub: false,
                //markers: true,
            }
        });

        return (() => {
            gsap.killTweensOf(heroText.current);
        });
    }

    useLayoutEffect(() => {
        if (!isMobile) {
            ctaAnimation();
        }
    }, [isMobile])

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
        <StyledEngineProvider injectFirst>
            <Box ref={heroText} className="my-4 d-flex justify-content-evenly flex-column">
                <Typography component={'h4'} gutterBottom className={'fw-semibold ' + mode[1]} sx={{ fontSize: !isMobile ? 36 : 22, lineHeight: '2.2rem !important', textAlign: align ?? "center" }}>
                    {title}
                </Typography>
                <Typography component={'h5'} gutterBottom className={'fw-bolder ' + mode[0]} sx={{ fontSize: titleSize ? isMobile ? 44 : titleSize : 56, textAlign: align ?? "center", lineHeight: 1 }}>
                    {sub}
                </Typography>
            </Box>
        </StyledEngineProvider>
    )
}

export default HeroTextCustom;