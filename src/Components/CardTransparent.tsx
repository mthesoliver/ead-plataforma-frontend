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

function CardTransparent({ title, subTitle, imagePath, size }: Readonly<CardSimpleType>) {
    const [imageBackground, setImageBackground] = useState<string>();
    const { isMobile } = useResize();

    useLayoutEffect(() => {
        if (imagePath) {
            setImageBackground(imagePath);
        } else {
            setImageBackground('');
        }
    }, []);

    const cardContent = (
        <>
            <Typography gutterBottom className='fw-bolder mt-3' sx={{ fontSize: !isMobile ? 22 : 16, lineHeight: 1.4, color: '#fff' }} >
                {title}
            </Typography>
            <Typography variant="body2" className='fw-light mt-3' sx={{ fontSize: !isMobile ? 14 : 12, lineHeight: 1.6, color: '#fff' }}>
                {subTitle}
            </Typography>
        </>
    );

    return (
        <Card className={`d-flex flex-column col-${size} py-5 align-items-center justify-content-center text-center gap-1 ` + styles.background_card} variant="outlined" >
            <Image src={imageBackground!} alt={imageBackground!} width={!isMobile ? 90 : 60} height={!isMobile ? 90 : 60} loading="lazy" />
            <CardContent className={`px-${!isMobile ? 4 : 1} mb-2`} >
                {cardContent}
            </CardContent>
        </Card >
    )
}

export default CardTransparent;