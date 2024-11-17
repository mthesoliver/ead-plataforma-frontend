'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, StyledEngineProvider } from '@mui/material';

import styles from "Ead/Styles/_card-custom-border.module.scss";
import { CardCustomType } from 'Ead/Types/CardCustomBorderType';
import useResize from 'Ead/CustomHooks/useResize';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

function CardCustomBorder({ givenIcon: GivenIcon, title, content, size = 12, initialPos = 520 }: Readonly<CardCustomType>) {
    const { isMobile } = useResize();

    const customCardAnimation = () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(`.card_custom_border_${initialPos}`, {
            y: initialPos!,
            position: "relative",
            ease: 'power2.inOut',
            opacity: 0,
        })
        gsap.to(`.card_custom_border_${initialPos}`, {
            y: 0,
            position: "relative",
            ease: 'power2.inOut',
            opacity: 1,
            scrollTrigger: {
                trigger: `.card_custom_border_${initialPos}`,
                start: `-520px 520px`,
                end: `0 ${initialPos! + 150}px`,
                scrub: true,
                //markers: true,
            }
        })

        return (() => {
            gsap.killTweensOf(`.card_custom_border_${initialPos}`);
        });
    }

    useLayoutEffect(() => {
        customCardAnimation();
    }, [])

    const iconPlaceholder = (
        <Box className={'' + styles.icon_container}>
            {GivenIcon && (
                <GivenIcon />
            )}
        </Box>
    );

    return (
        <StyledEngineProvider injectFirst>
            <Card className={`card_custom_border_${initialPos} p-4 col-${size} ` + styles.card_custom} variant="outlined" >
                {iconPlaceholder}
                <CardContent className={"p-1"} >
                    <Typography component={'h2'} gutterBottom className='fw-bolder mt-3' sx={{ fontSize: !isMobile ? 24 : 20, lineHeight: 1.4 }} >
                        {title}
                    </Typography>
                    <Typography component={'p'} variant="body2" className='fw-light mt-3' sx={{ fontSize: !isMobile ? 16 : 14, lineHeight: 1.4 }}>
                        {content}
                    </Typography>
                </CardContent>
            </Card >
        </StyledEngineProvider>
    )
}

export default CardCustomBorder;
