'use client'

import { useLayoutEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';

import styles from "Ead/Styles/_card-simple.module.scss";
import { CardSimpleType } from 'Ead/Types/CardSimpleType';

function CardSimple({ title, subTitle, imagePath, size }: Readonly<CardSimpleType>) {

    const cardContent = (
        <>
            <Typography gutterBottom className='fw-bolder mt-3' sx={{ fontSize: 24, lineHeight: 1.4, color: '#fff' }} >
                {title}
            </Typography>
            <Typography variant="body2" className='fw-light mt-3' sx={{ fontSize: 16, lineHeight: 1.4, color: '#fff', maxWidth: 400 }}>
                {subTitle}
            </Typography>
        </>
    );

    return (
        <Card className={`d-flex col-${size} ms-auto p-4 align-items-end justify-content-center text-center ` + styles.background_card} variant="outlined" sx={{ backgroundImage: `url(${imagePath})` }}>
            <CardContent className={"p-1 mb-2"} >
                {cardContent}
            </CardContent>
        </Card >
    )
}

export default CardSimple;