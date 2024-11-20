'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';

import styles from "Ead/Styles/_price-card.module.scss";
import { PriceType } from 'Ead/Types/PriceType';
import Button from './Button';
import { Badge, StyledEngineProvider } from '@mui/material';
import useResize from 'Ead/CustomHooks/useResize';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

export const PriceContent = ({ plans, opts, color, children, typeOfpay, anualValue }: Readonly<PriceType>) => {
    const { isMobile } = useResize();

    return (
        <>
            {plans && (
                <Typography component={'h5'} gutterBottom className='fw-medium mt-3' sx={{ fontSize: 24, lineHeight: 1, color: '#FE00FE' }} >
                    {plans}
                </Typography>
            )}

            <Typography component={'h2'} gutterBottom className='fw-bolder d-flex flex-column' sx={{ fontSize: !isMobile ? 80 : 60, lineHeight: !isMobile ? 1.4 : 1., color: color ?? '#1C0237' }} >
                {children}
                {typeOfpay && (
                    <span className='fs-6 fw-regular mb-4'>
                        {typeOfpay === 'mensal' ? 'Cobrado mensalmente no cartão de crédito, pix ou boleto' : `Parcelado no cartão ou ${anualValue} anualmente à vista no pix ou boleto`}
                    </span>
                )}
            </Typography>

            {opts?.smallDescription && (
                <Typography component={'p'} variant="body2" className='fw-medium mt-3' sx={{ fontSize: !isMobile ? 24 : 18, lineHeight: !isMobile ? "1.6rem!important" : "1.4rem!important", color: color ?? '#1C0237' }}>
                    {opts?.smallDescription}
                </Typography>
            )}

            {opts?.description && (
                <Typography component={'p'} variant="body2" className='fw-regular' sx={{ fontSize: !isMobile ? 18 : 14, lineHeight: "1.4rem!important", color: color ?? '#1C0237', maxWidth: '300px' }}>
                    {opts?.description}
                </Typography>
            )}
        </>
    )
};

export const PriceListAdvantages = ({ children, btnText, color, btnLink }: Readonly<PriceType>) => {
    return (
        <>
            {children}
            <Button rounded givenClass='p-3 mt-5 fw-bolder ' btnColor={color ? 'light' : ''} link={btnLink}>{btnText}</Button>
        </>
    )
};


function PriceCard({ plans, opts, color, children, column, listchildren, btnText, typeOfpay, badge, btnLink, initialPos, anualValue }: Readonly<PriceType>) {
    const isColumn = column ? 'flex-column' : 'flex-row';

    const customCardAnimation = () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(`.price_card_${initialPos}`, {
            y: initialPos!,
            position: "relative",
            opacity: 0,
            scrollTrigger: {
                trigger: `.price_card_${initialPos}`,
                start: `-200px 520px`,
                end: `400px ${initialPos! + 300}px`,
                scrub: false,
                //markers: true,
            }
        })
        gsap.to(`.price_card_${initialPos}`, {
            y: 0,
            position: "relative",
            opacity: 1,
            scrollTrigger: {
                trigger: `.price_card_${initialPos}`,
                start: `-200px 520px`,
                end: `400px ${initialPos! + 300}px`,
                scrub: false,
                //markers: true,
            }
        })

        return (() => {
            gsap.killTweensOf(`.price_card_${initialPos}`);
        });
    }

    useLayoutEffect(() => {
        customCardAnimation();
    }, [])

    return (
        <StyledEngineProvider injectFirst>
            <Card component={'div'} className={`price_card_${initialPos} d-flex py-5 align-items-center justify-content-center text-center gap-1 position-relative z-1 ` + (color ? styles.background_card_dark : styles.background_card) + ' ' + isColumn} variant="outlined" >
                {badge && (
                    <Badge sx={{ color: "#fff", padding: '.6rem 1.5rem !important', borderRadius: '120px' }} className={styles.badge_wrapper}>
                        {badge}
                    </Badge>
                )}
                <CardContent className={"px-4 mb-2 d-flex flex-column col " + (column ? 'col-12' : 'col-6')} >
                    <PriceContent opts={opts} plans={plans} color={color} typeOfpay={typeOfpay} btnLink={btnLink} anualValue={anualValue}>
                        <div className='d-flex flex-row align-items-end justify-content-center'>
                            {typeOfpay === 'anual' && (
                                <Typography sx={{ fontSize: "20px !important", paddingBottom: "25px!important", paddingRight: "10px!important" }} className='fw-bold'>
                                    10x
                                </Typography>
                            )}

                            {children}
                        </div>
                    </PriceContent>
                </CardContent>
                <CardContent className={"px-4 mb-2 d-flex flex-column col " + ' ' + (column ? 'col-12 mt-5 m-auto' : 'col-5') + ' ' + (color ? styles.child_color_light : styles.child_color_dark)} >
                    <PriceListAdvantages opts={opts} plans={plans} color={color} btnText={btnText} btnLink={btnLink}>
                        {listchildren}
                    </PriceListAdvantages>
                </CardContent>
            </Card >
        </StyledEngineProvider>
    )
}

export default PriceCard;