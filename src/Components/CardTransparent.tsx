'use client'

import { useLayoutEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';

import styles from "Ead/Styles/_card-transparent.module.scss";
import { CardSimpleType } from 'Ead/Types/CardSimpleType';
import Image from 'next/image';

function CardTransparent({ title, subTitle, imagePath, size }: Readonly<CardSimpleType>) {
    const [imageBackground, setImageBackground] = useState<string>();

    useLayoutEffect(() => {
        if (imagePath) {
            setImageBackground(imagePath);
        } else {
            setImageBackground('');
        }
    }, []);

    const cardContent = (
        <>
            <Typography gutterBottom className='fw-bolder mt-3' sx={{ fontSize: 22, lineHeight: 1.4, color: '#fff' }} >
                {title}
            </Typography>
            <Typography variant="body2" className='fw-light mt-3' sx={{ fontSize: 14, lineHeight: 1.6, color: '#fff' }}>
                {subTitle}
            </Typography>
        </>
    );

    return (
        <Card className={`d-flex flex-column col-${size} py-5 align-items-center justify-content-center text-center gap-1 ` + styles.background_card} variant="outlined" >
            <Image src={imageBackground!} alt={imageBackground!} width={90} height={90} loading="lazy" />
            <CardContent className={"px-4 mb-2"} >
                {cardContent}
            </CardContent>
        </Card >
    )
}

export default CardTransparent;