'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import styles from "Ead/Styles/_best-fee.module.scss";
import { CardFeeContainerType, CardFeeInner, CardFeeInnerOthers } from 'Ead/Types/CardFee';
import { Box, Slider, Stack, StyledEngineProvider } from '@mui/material';
import useResize from 'Ead/CustomHooks/useResize';
import PixIcon from '@mui/icons-material/Pix';
import CancelIcon from '@mui/icons-material/Cancel';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { formatCurrency, taxesCalc } from 'Ead/Helper/ValueHelper';
import { OtherTaxes, TaxMethod } from 'Ead/Enum/TaxMethods';

const CardFeeContentEad = ({ children, fee, aditional = '0.00' }: CardFeeInner) => {
    const { isMobile } = useResize();
    return (
        <CardContent className={`d-flex flex-row row align-items-center justify-content-center ` + (!isMobile ? 'col-6' : 'col-12')}>
            <Box className={`d-flex flex-row align-items-center justify-content-center`}>
                <img src={'/assets/images/ead_horizontal_footer_logo.png'} alt='Logotipo da Ead Plataforma' width={!isMobile ? 290 : 290 / 2} height={!isMobile ? 60 : 60 / 2} />
            </Box>

            <Box className={'d-flex flex-column row text-center'}>
                <Typography component={'p'} variant="body2" className='fw-light' sx={{ fontSize: 16, lineHeight: 1.6, color: '#fff' }}>
                    Valor de saque final:
                </Typography>

                <Typography component={'h2'} gutterBottom className='fw-bolder m-0' sx={{ fontSize: !isMobile ? 92 : 48, lineHeight: "80px !important", color: '#23CF5C' }} >
                    <Box component={'span'} sx={{ fontSize: !isMobile ? 40 : 24, color: '#23CF5C' }}>
                        R$
                    </Box>
                    {children === '0' ? '0.00' : children}
                </Typography>

                <Typography component={'p'} className='fw-bolder d-flex flex-column' sx={{ fontSize: !isMobile ? 20 : 16, lineHeight: "24px !important", color: '#fff' }}>
                    <Box component={'span'} className='fw-light' sx={{ fontSize: 16, color: '#fff' }}>
                        Taxas
                    </Box>
                    R${aditional !== '0' ? aditional : '0.00'} + {fee}%
                </Typography>

                <Typography component={'p'} gutterBottom className='fw-light mt-2 m-auto d-flex flex-column' sx={{ fontSize: !isMobile ? 16 : 12, lineHeight: !isMobile ? "24px !important" : "18px !important", color: '#fff', maxWidth: '320px!important' }} >
                    Oferecemos taxas mais competitivas que a concorrência. Compare e comprove!

                    <Box component={'span'} className='d-flex flex-row m-auto align-items-center mt-3'>
                        <CheckCircleIcon className={'me-1'} sx={{ color: '#23CF5C', fontSize: '18px' }} />
                        <Typography component={'p'} variant="body2" className='fw-bolder' sx={{ fontSize: 14, lineHeight: 1.6, color: '#fff' }}>
                            Juros de parcelamento é seu
                        </Typography>
                    </Box>
                </Typography>
            </Box>
        </CardContent>
    )
};

const CardFeeContentOthers = ({ currentValue }: CardFeeInnerOthers) => {
    const { isMobile } = useResize();
    const [taxMethod, setTaxMethod] = useState(OtherTaxes.HOTMART);
    const imgHotmart = useRef<HTMLImageElement>(null);
    const imgKiwify = useRef<HTMLImageElement>(null);
    const [currentConcurrent, setCurrentConcurrent] = useState('Hotmart');

    const additionalTaxesValues: number[] = [2.49, 1.00];
    const [additionalTaxes, setAdditionalTaxes] = useState<string>(additionalTaxesValues[0].toString());
    const imagesUrlPath = [
        '/assets/images/concorrentes/Sem bg/logo_rates_hotmart.png',
        '/assets/images/concorrentes/Sem bg/logo_rates_kiwify.png',
    ];
    const [mainImage, setMainImage] = useState(imagesUrlPath[0]);
    const [finalValue, setFinalValue] = useState<string>(() => {
        let baseValue = parseFloat(currentValue);
        return taxesCalc(baseValue, (OtherTaxes.HOTMART / 100), parseFloat(additionalTaxes));
    });

    useEffect(() => {
        let current = currentValue.replaceAll('.', '');
        if (currentValue === '1.000.000') {
            current = '1000000'
        }
        let finalWithdraw = taxesCalc(parseFloat(current), (taxMethod / 100), parseFloat(additionalTaxes));
        setFinalValue(formatCurrency(parseInt(finalWithdraw)));


    }, [currentValue, mainImage])

    const handleClick = (event: any) => {
        let company = event.currentTarget.alt;

        switch (company) {
            case 'Hotmart':
                setMainImage(imagesUrlPath[0]);
                setTaxMethod(OtherTaxes.HOTMART);
                setAdditionalTaxes(additionalTaxesValues[1].toString());
                setCurrentConcurrent(imgHotmart.current!.alt);

                handleActive(imgHotmart, true, [imgKiwify]);
                break;
            case 'Kiwify':
                setMainImage(imagesUrlPath[1]);
                setTaxMethod(OtherTaxes.KIWIFY);
                setAdditionalTaxes(additionalTaxesValues[0].toString());
                setCurrentConcurrent(imgKiwify.current!.alt);

                handleActive(imgKiwify, true, [imgHotmart]);
                break;
            default:
                setMainImage(imagesUrlPath[0]);
                break;
        }
    };

    const handleActive = (el: any, active: boolean, arr: any[]) => {
        if (active) {
            el.current!.classList.add(styles.active);
            el.current!.classList.remove(styles.not_active);

            arr.forEach((el: any) => {
                el.current!.classList.remove(styles.active);
                el.current!.classList.add(styles.not_active);
            });
        }
    }

    return (
        <CardContent className={`d-flex flex-row row align-items-center justify-content-center ` + (!isMobile ? 'col-6' : 'col-12')}>
            <Box className={`d-flex flex-row align-items-center justify-content-center`}>
                <img src={mainImage} alt='Logotipo da Ead Plataforma' width={!isMobile ? 237 : 237 / 2} height={!isMobile ? 75 : 75 / 2} />
            </Box>

            <Box className={'d-flex flex-column row text-center'}>
                <Typography component={'p'} variant="body2" className='fw-light mt-2' sx={{ fontSize: 16, lineHeight: 1.6, color: '#fff' }}>
                    Valor de saque final:
                </Typography>

                <Typography component={'h2'} gutterBottom className='fw-bolder m-0' sx={{ fontSize: !isMobile ? 86 : 44, lineHeight: "80px !important", color: '#D12C38' }} >
                    <Box component={'span'} sx={{ fontSize: !isMobile ? 40 : 24, color: '#D12C38' }}>
                        R$
                    </Box>
                    {finalValue === '0' ? '0.00' : finalValue}
                </Typography>

                <Typography component={'p'} className='fw-bolder d-flex flex-column' sx={{ fontSize: 20, lineHeight: "24px !important", color: '#fff' }}>
                    <Box component={'span'} className='fw-light' sx={{ fontSize: 16, color: '#fff' }}>
                        Taxas
                    </Box>
                    R${additionalTaxes !== '1' ? additionalTaxes : '1.00'} + {taxMethod}%
                </Typography>

                <Box component={'div'} className='d-flex flex-row m-auto align-items-center mt-2'>
                    <Stack component={'div'} className={`d-flex flex-row row ${!isMobile ? '' : 'justify-content-center align-items-center'}`}>
                        <img ref={imgHotmart} src={'/assets/images/concorrentes/Com bg/Botton_rates_hotmart.png '} alt="Hotmart" className={`d-flex flex-column col-${!isMobile ? '6' : '8 mt-2'} ` + styles.active} onClick={handleClick} style={{ cursor: 'pointer' }} />
                        <img ref={imgKiwify} src={'/assets/images/concorrentes/Com bg/Botton_rates_kiwify.png '} alt="Kiwify" className={`d-flex flex-column col-${!isMobile ? '6' : '8 mt-3'} ` + styles.not_active} onClick={handleClick} style={{ cursor: 'pointer' }} />
                    </Stack>
                </Box>

                <Typography component={'p'} gutterBottom className='fw-light mt-3 m-auto d-flex flex-column' sx={{ fontSize: 16, lineHeight: "24px !important", color: '#fff', maxWidth: '360px!important' }} >
                    <Box component={'span'} className='d-flex flex-row m-auto align-items-center mt-3'>
                        <CancelIcon className={'me-1'} sx={{ color: '#D12C38', fontSize: '18px' }} />
                        <Typography component={'p'} variant="body2" className='fw-bolder' sx={{ fontSize: 14, lineHeight: 1.6, color: '#fff' }}>
                            Juros de parcelamento <b>{currentConcurrent}</b>
                        </Typography>
                    </Box>
                </Typography>
            </Box>
        </CardContent>
    )
};
function SliderBestFee({ direction = 'row' }: Readonly<CardFeeContainerType>) {
    const { isMobile } = useResize();
    const additionalTaxesValues: number[] = [0.00, 0.10, 1.85]
    const [taxMethod, setTaxMethod] = useState(TaxMethod.PIX);
    const [additionalTaxes, setAdditionalTaxes] = useState<string>(additionalTaxesValues[0].toString());


    const btnPix = useRef<HTMLButtonElement>(null);
    const btnCredit = useRef<HTMLButtonElement>(null);
    const btnCreditPrazo = useRef<HTMLButtonElement>(null);
    const btnBoleto = useRef<HTMLButtonElement>(null);

    const [currentValue, setCurrentValue] = useState<string>(formatCurrency(parseFloat('500000.00')));
    const [finalValue, setFinalValue] = useState<string>(() => {
        let baseValue = parseFloat(currentValue);
        return taxesCalc(baseValue, (TaxMethod.PIX / 100), parseFloat(additionalTaxes));
    });

    useEffect(() => {
        let baseValue = parseFloat(currentValue.replaceAll('.', ''));

        let finalValue = taxesCalc(baseValue, (taxMethod / 100), parseFloat(additionalTaxes));
        setFinalValue(finalValue);

    }, [taxMethod])


    const handleInputValues = (event: any) => {
        let value = formatCurrency(parseFloat(event.target.value));
        setCurrentValue(value);

        let baseValue = parseFloat(event.target.value);
        setFinalValue(taxesCalc(baseValue, (taxMethod / 100), parseFloat(additionalTaxes)));
    };

    const handleMethod = (event: any) => {
        let payMethod = event.currentTarget.name;

        switch (payMethod) {
            case 'pix':
                setTaxMethod(TaxMethod.PIX);
                setAdditionalTaxes(additionalTaxesValues[0].toString())

                handleSelected(btnPix, true, [btnCredit, btnCreditPrazo, btnBoleto]);
                break;
            case 'credito_vista':
                setTaxMethod(TaxMethod.CREDIT_CARD_ON_DELIVERY);
                setAdditionalTaxes(additionalTaxesValues[1].toString())

                handleSelected(btnCredit, true, [btnPix, btnCreditPrazo, btnBoleto]);
                break;
            case 'credito_prazo':
                setTaxMethod(TaxMethod.CREDIT_CARD_INSTALLMENT);
                setAdditionalTaxes(additionalTaxesValues[1].toString())

                handleSelected(btnCreditPrazo, true, [btnPix, btnCredit, btnBoleto]);
                break;
            case 'boleto':
                setTaxMethod(TaxMethod.BOLETO);
                setAdditionalTaxes(additionalTaxesValues[2].toString())

                handleSelected(btnBoleto, true, [btnPix, btnCredit, btnCreditPrazo]);
                break;
            default:
                setTaxMethod(TaxMethod.PIX);
                break;
        }
    };

    const handleSelected = (el: any, active: boolean, arr: any[]) => {
        if (active) {
            el.current!.classList.add(styles.selected);

            arr.forEach((el: any) => {
                el.current!.classList.remove(styles.selected);
            });
        }
    }

    return (
        <StyledEngineProvider injectFirst>
            <Box className={`d-flex flex-row row w-100 m-auto mb-3 gap-3 justify-content-between`}>
                <Card component={'button'} ref={btnPix} className={`d-flex flex-col ps-3  py-3 align-items-center justify-content-center ` + styles.card_item + ' ' + styles.selected} variant="outlined" name='pix' onClick={handleMethod}>
                    <span className="me-2">
                        <PixIcon sx={{ color: '#fff', fontSize: '32px' }} />
                    </span>
                    <Typography component={'h4'} gutterBottom className='fw-bolder m-0' sx={{ fontSize: !isMobile ? 26 : "20px !important", lineHeight: '32px!important', color: '#fff', textAlign: 'left' }} >
                        Pix
                    </Typography>
                </Card >

                <Card component={'button'} ref={btnCredit} className={`d-flex flex-col ps-3  py-3  align-items-center justify-content-center ` + styles.card_item} variant="outlined" name='credito_vista' onClick={handleMethod}>
                    <span className="me-2">
                        <CreditCardIcon sx={{ color: '#fff', fontSize: '32px' }} />
                    </span>
                    <Typography component={'h4'} gutterBottom className='fw-bolder m-0' sx={{ fontSize: !isMobile ? 16 : "12px !important", lineHeight: !isMobile ? '20px!important' : '16px!important', color: '#fff', textAlign: 'left' }} >
                        Cartão de crédito à vista
                    </Typography>
                </Card >

                <Card component={'button'} ref={btnCreditPrazo} className={`d-flex flex-col ps-3  py-3   align-items-center justify-content-center ` + styles.card_item} variant="outlined" name='credito_prazo' onClick={handleMethod}>
                    <span className="me-2">
                        <CreditCardIcon sx={{ color: '#fff', fontSize: '32px' }} />
                    </span>
                    <Typography component={'h4'} gutterBottom className='fw-bolder m-0' sx={{ fontSize: !isMobile ? 16 : "12px !important", lineHeight: !isMobile ? '20px!important' : '16px!important', color: '#fff', textAlign: 'left' }} >
                        12x Cartão de crédito a prazo
                    </Typography>
                </Card >

                <Card component={'button'} ref={btnBoleto} className={`d-flex flex-col ps-3  py-3  align-items-center justify-content-center ` + styles.card_item} variant="outlined" name='boleto' onClick={handleMethod}>
                    <span className="me-2">
                        <ReceiptIcon sx={{ color: '#fff', fontSize: '32px' }} />
                    </span>
                    <Typography component={'h4'} gutterBottom className='fw-bolder m-0' sx={{ fontSize: !isMobile ? 26 : "20px !important", lineHeight: '32px!important', color: '#fff', textAlign: 'left' }} >
                        Boleto
                    </Typography>
                </Card >
            </Box>
            <Card className={`d-flex flex-column py-3 ` + styles.background_card} variant="outlined" >
                <Box className={`d-flex flex-row row m-auto w-100`}>
                    <Box>
                        <Slider className={`mt-3 ` + styles.slider_color} color='secondary' defaultValue={500000} min={0.00} max={1000000.00} aria-label="Value slider" onChange={handleInputValues} step={100}></Slider>
                    </Box>
                    <Typography component={'p'} variant="body2" className='fw-light mt-3 text-center' sx={{ fontSize: '16px', lineHeight: '1.6rem', color: '#fff' }}>
                        Arraste e veja os valores em vendas:
                    </Typography>
                    <Typography component={'p'} variant="body2" className='fw-bold text-center' sx={{ fontSize: '24px', lineHeight: '1.6rem', color: '#fff' }}>
                        R$ {currentValue},00
                    </Typography>
                </Box>
                <Box className={`d-flex flex-${direction} py-${!isMobile ? '5' : '2'} w-100  justify-content-center align-items-center`}>
                    <CardFeeContentEad fee={taxMethod} aditional={additionalTaxes}>
                        {formatCurrency(parseInt(finalValue))}
                    </CardFeeContentEad>

                    <CardFeeContentOthers fee={taxMethod} currentValue={currentValue}>
                    </CardFeeContentOthers>
                </Box>
            </Card >
        </StyledEngineProvider>
    )
}

export default SliderBestFee;