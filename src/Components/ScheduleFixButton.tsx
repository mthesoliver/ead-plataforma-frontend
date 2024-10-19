'use client'

import { StyledEngineProvider } from '@mui/material';
import Link from 'next/link';
import styles from "Ead/Styles/_schedule-button.module.scss";
import useResize from 'Ead/CustomHooks/useResize';

function ScheduleFixButton() {
    const { isMobile } = useResize();

    return (
        <StyledEngineProvider injectFirst>
            <Link href={'https://eadplataforma.com/demo'}>
                <img src={!isMobile ? "/assets/images/schedule_presentation.png" : "/assets/images/schedule_presentation_mobile.png"} alt='Agende sua apresentação' width={!isMobile ? 850 / 2.7 : 480 / 2.7} height={!isMobile ? 200 / 2.7 : 190 / 2.7}
                    style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: '99' }} className={styles.img_wrapper} />
            </Link>
        </StyledEngineProvider>
    )
}

export default ScheduleFixButton;