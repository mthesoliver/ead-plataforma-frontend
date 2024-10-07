'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, StyledEngineProvider } from '@mui/material';

import styles from "Ead/Styles/_card-custom-border.module.scss";
import { CardCustomType } from 'Ead/Types/CardCustomBorderType';
import useResize from 'Ead/CustomHooks/useResize';

function CardCustomBorder({ givenIcon: GivenIcon, title, content, size = 12 }: Readonly<CardCustomType>) {
    const { isMobile } = useResize();

    const iconPlaceholder = (
        <Box className={'' + styles.icon_container}>
            {GivenIcon && (
                <GivenIcon />
            )}
        </Box>

    );

    return (
        <StyledEngineProvider injectFirst>
            <Card className={`p-4 col-${size} ` + styles.card_custom} variant="outlined" >
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