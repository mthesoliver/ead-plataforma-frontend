'use client'

import styles from 'Ead/Styles/_your-course-placeholder.module.scss';
import InputPlaceholder from './InputPlaceholder';
import { Box, StyledEngineProvider, Typography } from '@mui/material';
import useResize from 'Ead/CustomHooks/useResize';

function YourCoursePlaceholder() {
    const { isMobile } = useResize();

    return (

        <StyledEngineProvider injectFirst>
            {isMobile && (
                <Box className="text-center m-1 mt-5 pt-5 ">
                    <Typography component={'h2'} gutterBottom className={'fw-bolder ' + styles.main_tittle_color + ' ' + styles.main_title_size} sx={{ lineHeight: '32px !important' }}>
                        Crie seu curso online agora
                    </Typography>
                    <Typography component={'h5'} gutterBottom className={'fw-light'} sx={{ fontSize: 16, lineHeight: 1.4 }}>
                        Experimente os melhores recursos, comece agora.
                    </Typography>
                    <Box className="d-flex flex-row justify-content-center text-center mx-3">
                        <InputPlaceholder />
                    </Box>
                </Box >
            )}

            {!isMobile && (
                <Box className="text-center m-5">
                    <Typography component={'h2'} gutterBottom className={'fw-bolder ' + styles.main_tittle_color + ' ' + styles.main_title_size}>
                        Crie seu curso online agora
                    </Typography>
                    <Typography component={'h5'} gutterBottom className={'fw-light '} sx={{ fontSize: 22, lineHeight: 1.4 }}>
                        Experimente os melhores recursos, comece agora.
                    </Typography>
                    <Box className="d-flex flex-row justify-content-center text-center m-5">
                        <InputPlaceholder />
                    </Box>
                </Box >
            )}

        </StyledEngineProvider>
    )
}

export default YourCoursePlaceholder;