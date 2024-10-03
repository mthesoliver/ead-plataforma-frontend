'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import styles from "Ead/Styles/_best-fee.module.scss";
import { CardFeeContainerType } from 'Ead/Types/CardFee';
import { Box, StyledEngineProvider } from '@mui/material';
import useResize from 'Ead/CustomHooks/useResize';
import PixIcon from '@mui/icons-material/Pix';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CardFeeContentEad = () => {
    const { isMobile } = useResize();
    return (
        <CardContent className={`d-flex flex-row row align-items-center justify-content-center col-6 `}>
            <Box className={`d-flex flex-row align-items-center justify-content-center`}>
                <Image src={'/assets/images/ead_horizontal_footer_logo.png'} alt='Logotipo da Ead Plataforma' width={290} height={60} />
            </Box>

            <Box className={'d-flex flex-column row my-2 text-center'}>
                <Typography component={'p'} variant="body2" className='fw-light mt-3' sx={{ fontSize: 16, lineHeight: 1.6, color: '#fff' }}>
                    Valor de saque final:
                </Typography>

                <Typography component={'h2'} gutterBottom className='fw-bolder m-0' sx={{ fontSize: 100, lineHeight: "80px !important", color: '#23CF5C' }} >
                    <Box component={'span'} sx={{ fontSize: 40, color: '#23CF5C' }}>
                        R$
                    </Box>
                    97.348
                </Typography>

                <Typography component={'p'} className='fw-bolder d-flex flex-column' sx={{ fontSize: 20, lineHeight: "24px !important", color: '#fff' }}>
                    <Box component={'span'} className='fw-light' sx={{ fontSize: 16, color: '#fff' }}>
                        Taxas
                    </Box>
                    R$1,00 + 5,99%
                </Typography>

                <Typography component={'p'} gutterBottom className='fw-light mt-3 m-auto d-flex flex-column' sx={{ fontSize: 16, lineHeight: "24px !important", color: '#fff', maxWidth: '320px!important' }} >
                    Oferecemos taxas mais competitivas que a concorrência. Compare e comprove!

                    <Box component={'span'} className='d-flex flex-row m-auto align-items-center mt-3'>
                        <CheckCircleIcon className={'me-1'} sx={{ color: '#fff', fontSize: '18px' }} />
                        <Typography component={'p'} variant="body2" className='fw-bolder' sx={{ fontSize: 14, lineHeight: 1.6, color: '#fff' }}>
                            Juros de parcelamento
                        </Typography>
                    </Box>
                </Typography>
            </Box>
        </CardContent>
    )
};
function SliderBestFee({ direction = 'row' }: Readonly<CardFeeContainerType>) {
    return (
        <StyledEngineProvider injectFirst>
            <Box className={`d-flex flex-row row w-100 m-auto mb-3 gap-3 `}>
                <Card component={'button'} className={`d-flex flex-col ps-3  py-5 align-items-center justify-content-center ` + styles.card_item} variant="outlined" >
                    <span className="me-2">
                        <PixIcon sx={{ color: '#fff', fontSize: '42px' }} />
                    </span>
                    <Typography component={'h4'} gutterBottom className='fw-bolder m-0' sx={{ fontSize: 32, lineHeight: '32px!important', color: '#fff', textAlign: 'left' }} >
                        Pix
                    </Typography>
                </Card >

                <Card component={'button'} className={`d-flex flex-col ps-3 py-5 align-items-center justify-content-center ` + styles.card_item} variant="outlined" >
                    <span className="me-2">
                        <CreditCardIcon sx={{ color: '#fff', fontSize: '42px' }} />
                    </span>
                    <Typography component={'h4'} gutterBottom className='fw-bolder m-0' sx={{ fontSize: 20, lineHeight: '20px!important', color: '#fff', textAlign: 'left' }} >
                        Cartão de crédito à vista
                    </Typography>
                </Card >

                <Card component={'button'} className={`d-flex flex-col ps-3  py-5  align-items-center justify-content-center ` + styles.card_item} variant="outlined" >
                    <span className="me-2">
                        <CreditCardIcon sx={{ color: '#fff', fontSize: '42px' }} />
                    </span>
                    <Typography component={'h4'} gutterBottom className='fw-bolder m-0' sx={{ fontSize: 20, lineHeight: '20px!important', color: '#fff', textAlign: 'left' }} >
                        12x Cartão de crédito a prazo
                    </Typography>
                </Card >

                <Card component={'button'} className={`d-flex flex-col ps-3  py-5 align-items-center justify-content-center ` + styles.card_item} variant="outlined" >
                    <span className="me-2">
                        <ReceiptIcon sx={{ color: '#fff', fontSize: '42px' }} />
                    </span>
                    <Typography component={'h4'} gutterBottom className='fw-bolder m-0' sx={{ fontSize: 26, lineHeight: '32px!important', color: '#fff', textAlign: 'left' }} >
                        Boleto
                    </Typography>
                </Card >
            </Box>
            <Card className={`d-flex flex-${direction} py-5 w-100 ` + styles.background_card} variant="outlined" >
                <CardFeeContentEad />
                <CardFeeContentEad />
            </Card >
        </StyledEngineProvider>
    )
}

export default SliderBestFee;