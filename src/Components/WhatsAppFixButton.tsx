'use client'

import { StyledEngineProvider } from '@mui/material';
import Link from 'next/link';
import styles from "Ead/Styles/_wpp.module.scss";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useResize from 'Ead/CustomHooks/useResize';

function WhatsAppFixButton() {
    const { isMobile } = useResize();

    return (
        <StyledEngineProvider injectFirst>
            <Link href={'https://wa.me/551126266036?text=Estou%20interessado(a)%20em%20come%C3%A7ar%20meu%20EAD.'} target='_blank'>
                <WhatsAppIcon sx={{ fontSize: !isMobile ? 62 : 56 }}
                    style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '99' }} className={styles.img_wrapper + ' ' + styles.btn_wpp_border } />
            </Link>
        </StyledEngineProvider>
    )
}

export default WhatsAppFixButton;