'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';

import styles from "Ead/Styles/_price-card.module.scss";
import { PriceType } from 'Ead/Types/PriceType';
import Button from './Button';
import { Badge } from '@mui/material';
import useResize from 'Ead/CustomHooks/useResize';

export const PriceContent = ({ plans, opts, color, children, typeOfpay }: Readonly<PriceType>) => {
    const { isMobile } = useResize();

    return (
        <>
            {plans && (
                <Typography gutterBottom className='fw-medium mt-3' sx={{ fontSize: 24, lineHeight: 1, color: '#FE00FE' }} >
                    {plans}
                </Typography>
            )}

            <Typography gutterBottom className='fw-bolder d-flex flex-column' sx={{ fontSize: !isMobile ? 80 : 60, lineHeight: !isMobile ? 1.4 : 1., color: color ?? '#1C0237' }} >
                {children}
                {typeOfpay && (
                    <span className='fs-4 fw-regular mb-4'>
                        {typeOfpay}
                    </span>
                )}
            </Typography>

            {opts?.smallDescription && (
                <Typography variant="body2" className='fw-medium mt-3' sx={{ fontSize: !isMobile ? 24 : 18, lineHeight: !isMobile ? 1.6 : 1.4, color: color ?? '#1C0237' }}>
                    {opts?.smallDescription}
                </Typography>
            )}

            {opts?.description && (
                <Typography variant="body2" className='fw-regular' sx={{ fontSize: !isMobile ? 18 : 14, lineHeight: 1.6, color: color ?? '#1C0237', maxWidth: '300px' }}>
                    {opts?.description}
                </Typography>
            )}
        </>
    )
};

export const PriceListAdvantages = ({ children, btnText, color }: Readonly<PriceType>) => {
    return (
        <>
            {children}
            <Button rounded givenClass='p-3 mt-5 fw-bolder ' btnColor={color ? 'light' : ''}>{btnText}</Button>
        </>
    )
};


function PriceCard({ plans, opts, color, children, column, listchildren, btnText, typeOfpay, badge }: Readonly<PriceType>) {
    const isColumn = column ? 'flex-column col' : 'flex-row row';

    return (
        <Card className={`d-flex py-5 align-items-center justify-content-center text-center gap-1 position-relative z-1 ` + (color ? styles.background_card_dark : styles.background_card) + ' ' + isColumn} variant="outlined" >
            {badge && (
                <Badge sx={{ color: "#fff", padding: '.6rem 1.5rem !important', borderRadius: '120px' }} className={styles.badge_wrapper}>
                    {badge}
                </Badge>
            )}
            <CardContent className={"px-4 mb-2 d-flex flex-column col " + (column ? 'col-12' : 'col-6')} >
                <PriceContent opts={opts} plans={plans} color={color} typeOfpay={typeOfpay}>
                    {children}
                </PriceContent>
            </CardContent>
            <CardContent className={"px-4 mb-2 d-flex flex-column col " + ' ' + (column ? 'col-12 mt-5 m-auto' : 'col-5') + ' ' + (color ? styles.child_color_light : styles.child_color_dark)} >
                <PriceListAdvantages opts={opts} plans={plans} color={color} btnText={btnText} >
                    {listchildren}
                </PriceListAdvantages>
            </CardContent>
        </Card >
    )
}

export default PriceCard;