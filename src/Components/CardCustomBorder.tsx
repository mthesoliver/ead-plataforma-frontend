'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import styles from "Ead/Styles/_card-custom-border.module.scss";
import { CardCustomType } from 'Ead/Types/CardCustomBorderType';

function CardCustomBorder({ givenIcon: GivenIcon, title, content }: Readonly<CardCustomType>) {

    const iconPlaceholder = (
        <Box className={'' + styles.icon_container}>
            {GivenIcon && (
                <GivenIcon />
            )}
        </Box>

    );



    return (
        <Card className={"p-4 " + styles.card_custom} variant="outlined" >
            {iconPlaceholder}
            <CardContent className={"p-1"} >
                <Typography gutterBottom className='fw-bolder mt-3' sx={{ fontSize: 24, lineHeight: 1.4 }} >
                    {title}
                </Typography>
                <Typography variant="body2" className='fw-light mt-3' sx={{ fontSize: 16, lineHeight: 1.4 }}>
                    {content}
                </Typography>
            </CardContent>
        </Card >
    )
}

export default CardCustomBorder;