'use client'

import styles from 'Ead/Styles/_stamp.module.scss';
import { Box, StyledEngineProvider, Typography } from '@mui/material';
import useResize from 'Ead/CustomHooks/useResize';

function StampCircle({ children }: any) {
    const { isMobile } = useResize();

    return (
        <StyledEngineProvider injectFirst>
            <Box className={"m-2 d-flex flex-row align-itens-center justify-content-center position-relative p-2 z-3 " + styles.back_circle}>
                <Box className={styles.main_circle}>
                    <Typography sx={{ maxWidth: 120, textAlign: 'center', fontWeight: 800, fontSize: !isMobile ? 14 : 12, lineHeight: "1.2rem!important" }}
                        className="position-relative top-50 start-50 translate-middle">
                        {children}
                    </Typography>
                    <img src="/assets/images/svg/text_on_circle.svg"
                        alt="Crie a plataforma perfeita para seu curso"
                        width={!isMobile ? 235 : 185} height={!isMobile ? 235 : 185}
                        className={"animation_rotate " + styles.animation_rotate} />
                </Box>
            </Box >
        </StyledEngineProvider >
    )
}

export default StampCircle;