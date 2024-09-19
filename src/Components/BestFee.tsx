'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import styles from "Ead/Styles/_best-fee.module.scss";
import { CardFeeContainerType, CardFeeType } from 'Ead/Types/CardFee';
import { Box } from '@mui/material';
import useResize from 'Ead/CustomHooks/useResize';

export const CardFeeContent = ({ title, givenIcon: GivenIcon, feeValues, release, size }: Readonly<CardFeeType>) => {
    const { isMobile } = useResize();
    return (
        <CardContent className={`d-flex flex-row row align-items-start px-5 col-${size ?? 4} mb-${!isMobile ? 2 : 5}`}>
            <Box className={`d-flex flex-row justify-content-start align-items-center my-2 `}>
                {GivenIcon && (
                    <span className="me-2">
                        <GivenIcon sx={{ color: '#fff', fontSize: '42px' }} />
                    </span>
                )}
                <Typography gutterBottom className='fw-bolder ' sx={{ fontSize: 20, lineHeight: 1.4, color: '#fff' }} >
                    {title}
                </Typography>
            </Box>
            <Box className={'d-flex flex-row row justify-content-start my-2 text-start'}>
                <Typography variant="body2" className='fw-light mt-3' sx={{ fontSize: 12, lineHeight: 1.6, color: '#fff' }}>
                    Taxas
                </Typography>
                <Typography gutterBottom className='fw-bolder' sx={{ fontSize: 22, lineHeight: 1.4, color: '#fff' }} >
                    {feeValues}
                </Typography>
            </Box>
            <Box className={'d-flex flex-row row justify-content-start my-2 text-start'}>
                <Typography variant="body2" className='fw-light mt-3' sx={{ fontSize: 12, lineHeight: 1.6, color: '#fff' }}>
                    Prazo para liberação
                </Typography>
                <Typography gutterBottom className='fw-bolder' sx={{ fontSize: 22, lineHeight: 1.4, color: '#fff' }} >
                    {release}
                </Typography>
            </Box>
        </CardContent>
    )
};
function BestFee({ children, direction = 'row' }: Readonly<CardFeeContainerType>) {
    return (
        <Card className={`d-flex flex-${direction} py-5 w-100 ` + styles.background_card} variant="outlined" >
            {children}
        </Card >
    )
}

export default BestFee;