'use client'

import { useLayoutEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';

import styles from "Ead/Styles/_card-transparent.module.scss";
import { CardSimpleType } from 'Ead/Types/CardSimpleType';
import Image from 'next/image';
import useResize from 'Ead/CustomHooks/useResize';
import { StyledEngineProvider } from '@mui/material';

function CardTransparent({ title, subTitle, imagePath, size }: Readonly<CardSimpleType>) {
    const { isMobile } = useResize();

    const cardContent = (
        <>
            <Typography component={'h2'} gutterBottom className='fw-bolder mt-3' sx={{ fontSize: !isMobile ? 26 : 18, lineHeight: 1.4, color: '#fff' }} >
                {title}
            </Typography>
            <Typography component={'p'} variant="body2" className='fw-light mt-3' sx={{ fontSize: !isMobile ? 16 : 14, lineHeight: "26px!important", color: '#fff' }}>
                {subTitle}
            </Typography>
        </>
    );

    return (
        <StyledEngineProvider injectFirst>
            <Card className={`d-flex flex-column col-${size} py-5 align-items-center justify-content-center text-center gap-1 ` + styles.background_card} variant="outlined" >
                <Image src={imagePath!} alt={imagePath!} width={!isMobile ? 90 : 60} height={!isMobile ? 90 : 60} loading="lazy" />
                <CardContent className={`px-${!isMobile ? 4 : 1} mb-2`} >
                    {cardContent}
                </CardContent>
            </Card >
        </StyledEngineProvider>
    )
}

export default CardTransparent;