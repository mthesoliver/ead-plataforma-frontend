'use client'

import { useLayoutEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';

import styles from "Ead/Styles/_card-simple.module.scss";
import { CardSimpleType } from 'Ead/Types/CardSimpleType';
import { Stack, StyledEngineProvider } from '@mui/material';
import Link from 'next/link';

function CardSimple({ title, subTitle, imagePath, size, link }: Readonly<CardSimpleType>) {

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
            <Card component={'a'} href={link} className={`d-flex col-${size} ms-auto p-4 align-items-end justify-content-center text-center ` + styles.background_card} variant="outlined" sx={{ backgroundImage: `url(${imagePath})` }}>
                <CardContent className={"p-1 mb-2"} >
                    {cardContent}
                </CardContent>
            </Card >
        </StyledEngineProvider>
    )
}

export default CardSimple;