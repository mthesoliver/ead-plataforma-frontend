'use client'

import styles from 'Ead/Styles/_your-course-placeholder.module.scss';
import InputPlaceholder from './InputPlaceholder';
import { Box, Typography } from '@mui/material';

function YourCoursePlaceholder() {
    return (
        <Box className="text-center m-5">
            <Typography gutterBottom className={'fw-bolder ' + styles.main_tittle_color + ' ' + styles.main_title_size}>
                Crie seu curso online agora
            </Typography>
            <Typography gutterBottom className={'fw-light '} sx={{ fontSize: 22, lineHeight: 1.4 }}>
                Experimente os melhores recursos, comece agora.
            </Typography>
            <Box className="d-flex flex-row justify-content-center text-center m-5">
                <InputPlaceholder />
            </Box>
        </Box >
    )
}

export default YourCoursePlaceholder;