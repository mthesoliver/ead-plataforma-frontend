'use client'

import { useLayoutEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import styles from 'Ead/Styles/_demonstration-form.module.scss';

import { CtaType } from 'Ead/Types/CtaType';
import useResize from 'Ead/CustomHooks/useResize';
import { StyledEngineProvider } from '@mui/material';

function DemonstrationCta({ title, titleSize, subTitle, imagePath, fontColor, children }: Readonly<CtaType>) {
    const [imageBackground, setImageBackground] = useState<string>();
    const { isMobile } = useResize();

    useLayoutEffect(() => {
        if (imagePath) {
            setImageBackground(imagePath);
        } else {
            setImageBackground('');
        }
    }, []);

    const CustomCardContent = ({ title, titleSize, subTitle, fontColor }: Readonly<CtaType>) => {
        return (
            <CardContent className={`d-flex flex-column row justify-content-center p-1 w-${!isMobile ? 75 : 100} m-auto ` + styles.content_wrapper} >
                <Typography component={'h2'} gutterBottom className='fw-bolder mt-3' sx={{ fontSize: titleSize ? !isMobile ? titleSize : "26px !important" : "24px!important", lineHeight: `${!isMobile ? titleSize : "26"}px !important`, color: fontColor ?? '#fff', fontFamily: "Rajdhani" }} >
                    {title}
                </Typography>
                <Typography component={'p'} variant="body2" className='fw-light mt-3' sx={{ fontSize: !isMobile ? 20 : 16, lineHeight: 1.6, color: '#fff' }}>
                    {subTitle}
                </Typography>
            </CardContent >
        )
    };

    return (
        <StyledEngineProvider injectFirst>
            <Card className={"d-flex flex-row p-3 align-items-center justify-content-center text-center " + styles.demonstration_wrapper}
                variant="outlined"
                sx={{ borderColor: "none", borderWidth: 0, borderRadius: "24px", backgroundColor: "#1C0237", backgroundSize: "cover", backgroundPosition: "center center", }}>
                <CardContent className={"p-1 mb-2 position-relative"} >
                    <Image src={imageBackground!} alt={imageBackground!} width={!isMobile ? 540 : 540 / 2} height={!isMobile ? 400 : 400 / 2} loading="lazy" className={styles.top_image_form} />
                    <CustomCardContent title={title} subTitle={subTitle} titleSize={titleSize} fontColor={fontColor}>
                    </CustomCardContent>
                    {children}
                </CardContent>
            </Card >
        </StyledEngineProvider>
    )
}

export default DemonstrationCta;