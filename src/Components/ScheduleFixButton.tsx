'use client'

import { StyledEngineProvider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import styles from "Ead/Styles/_schedule-button.module.scss";

function ScheduleFixButton() {

    return (
        <StyledEngineProvider injectFirst>
            <Link href={'https://eadplataforma.com/demo'}>
                <img src={"/assets/images/schedule_presentation.png"} alt='Agende sua apresentação' width={850 / 2.7} height={200 / 2.7}
                    style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: '99' }} className={styles.img_wrapper} />
            </Link>
        </StyledEngineProvider>
    )
}

export default ScheduleFixButton;