'use client'

import { useLayoutEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';

import styles from "Ead/Styles/_card-simple.module.scss";
import { CardSimpleType } from 'Ead/Types/CardSimpleType';
import { StyledEngineProvider } from '@mui/material';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import useResize from 'Ead/CustomHooks/useResize';

function CardSimple({ title, subTitle, imagePath, size, link, initialPos = 100 }: Readonly<CardSimpleType>) {
    const { isMobile } = useResize();

    const simpleCardAnimation = () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(`.card_simple${initialPos!}`, {
            x: initialPos!,
            position: "relative",
            opacity: 0,
            scrollTrigger: {
                trigger: `#cards_img_container`,
                start: `-150px 300px`,
                end: `-50px  600px`,
                scrub: false,
                //markers: true,
            }
        })
        gsap.to(`.card_simple${initialPos!}`, {
            x: 0,
            position: "relative",
            opacity: 1,
            scrollTrigger: {
                trigger: `#cards_img_container`,
                start: `-150px 300px`,
                end: `-50px  600px`,
                scrub: false,
                //markers: true,
            }
        })

        return (() => {
            gsap.killTweensOf(`.card_simple`);
        });
    }

    useLayoutEffect(() => {
        if (!isMobile) {
            simpleCardAnimation();
        }
    }, [isMobile])

    const cardContent = (
        <>
            <Typography component={'h2'} gutterBottom className='fw-bolder mt-3' sx={{ fontSize: 24, lineHeight: "1.6rem!important", color: '#fff' }} >
                {title}
            </Typography>
            <Typography component={'p'} variant="body2" className='fw-light mt-3' sx={{ fontSize: 16, lineHeight: "1.6rem!important", color: '#fff', maxWidth: 400 }}>
                {subTitle}
            </Typography>
        </>
    );

    return (
        <StyledEngineProvider injectFirst>
            <Card component={'a'} href={link} className={`card_simple${initialPos!} d-flex col-${size} ms-auto p-4 align-items-end justify-content-center text-center ` + styles.background_card} variant="outlined" sx={{ backgroundImage: `url(${imagePath})` }}>
                <CardContent className={"p-1 mb-2"} >
                    {cardContent}
                </CardContent>
            </Card >
        </StyledEngineProvider>
    )
}

export default CardSimple;