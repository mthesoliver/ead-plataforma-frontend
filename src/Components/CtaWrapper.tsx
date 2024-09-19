'use client'

import { useLayoutEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';

import { CtaType } from 'Ead/Types/CtaType';
import { Box } from '@mui/material';
import useResize from 'Ead/CustomHooks/useResize';

function CtaWrapper({ title, titleSize, subTitle, imagePath, fontColor, children, border }: Readonly<CtaType>) {
    const [imageBackground, setImageBackground] = useState<string>();
    const { isMobile } = useResize();

    useLayoutEffect(() => {
        if (imagePath) {
            setImageBackground(imagePath);
        } else {
            setImageBackground('');
        }
    }, []);

    const CustomCardContent = ({ title, titleSize, subTitle, fontColor, children }: Readonly<CtaType>) => {
        return (
            <CardContent className={`d-flex flex-column p-2 my-5 w-${!isMobile ? 75 : 100} m-auto`} >
                <Typography gutterBottom className='fw-bolder mt-3' sx={{ fontSize: titleSize ? !isMobile ? titleSize : 26 : 32, lineHeight: 1.4, color: fontColor ?? '#fff' }} >
                    {title}
                </Typography>
                <Typography variant="body2" className='fw-light mt-3' sx={{ fontSize: !isMobile ? 20 : 14, lineHeight: 1.6, color: '#fff' }}>
                    {subTitle}
                </Typography>
                <Box className={`d-flex flex-${!isMobile ? 'row' : 'column'} row gap-3 w-${!isMobile ? 50 : 100} m-auto justify-content-center flex-nowrap mt-5`}>
                    {children}
                </Box>
            </CardContent>
        )
    };

    return (
        <Card className={"d-flex flex-row p-4 align-items-center justify-content-center text-center"}
            variant="outlined"
            sx={
                {
                    ...border ? { borderColor: "rgba(255, 255, 255, .2)", borderWidth: 1, borderRadius: "16px", backgroundImage: imagePath ? `url(${imageBackground})` : '', backgroundColor: "transparent", backgroundSize: "cover", backgroundPosition: "center center", }
                        : { borderColor: "none", borderWidth: 0, backgroundImage: imagePath ? `url(${imageBackground})` : '', backgroundColor: "transparent", backgroundSize: "cover", backgroundPosition: "center center", }
                }
            }>
            <CardContent className={"p-1 mb-2"} >
                <CustomCardContent title={title} subTitle={subTitle} titleSize={titleSize} fontColor={fontColor}>
                    {children}
                </CustomCardContent>
            </CardContent>
        </Card >
    )
}

export default CtaWrapper;