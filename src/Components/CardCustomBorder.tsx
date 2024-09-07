'use client'

import { useLayoutEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import styles from "Ead/Styles/_card-custom-border.module.scss";

function CardCustomBorder(props: Readonly<{ icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>, title?: string, content?: string }>) {
    const [givenIcon, setIcon] = useState<OverridableComponent<SvgIconTypeMap<{}, "svg">> | null>();

    useLayoutEffect(() => {
        if (props.icon !== null || props.icon !== undefined) {
            setIcon(props.icon);
        } else {
            setIcon(null);
        }
    }, []);

    const iconPlaceholder = (
        <Box className={'' + styles.icon_container}>
            <props.icon />
        </Box>
    );

    return (
        <Card className={"p-4 " + styles.card_custom} variant="outlined" >
            {iconPlaceholder}
            <CardContent className={"p-1"} >
                <Typography gutterBottom className='fw-bolder mt-3' sx={{ fontSize: 24, lineHeight: 1.4 }} >
                    {props.title}
                </Typography>
                <Typography variant="body2" className='fw-light mt-3' sx={{ fontSize: 16, lineHeight: 1.4 }}>
                    {props.content}
                </Typography>
            </CardContent>
        </Card >
    )
}

export default CardCustomBorder;