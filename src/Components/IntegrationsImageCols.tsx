'use client'

import { Box, StyledEngineProvider } from '@mui/material';
import Image from 'next/image';
import styles from 'Ead/Styles/_integrations.module.scss';

function IntegrationsImageCols() {
    const images = [
        "/assets/images/integrations/Coluna_01.png",
        "/assets/images/integrations/Coluna_02.png",
        "/assets/images/integrations/Coluna_03.png",
        "/assets/images/integrations/Coluna_04.png",
        "/assets/images/integrations/Coluna_05.png",
        "/assets/images/integrations/Coluna_06.png",
        "/assets/images/integrations/Coluna_07.png"
    ]
    return (
        <StyledEngineProvider injectFirst>
            <Box className={"d-flex flex-row justify-content-center align-items-center " + styles.integrations_container}>
                <Box className={"position-absolute d-flex justify-content-center"}>
                    <Box className={"d-flex align-items-center justify-content-center " + styles.overlay_images} />
                    {[...images].map((item, index) => (
                        <Image key={index} src={item} width={200} height={400} alt={`Logotipo parceiro ${item.split('-').slice(-1)}`} style={{ objectFit: "contain" }}
                            className={index % 2 === 0 ? `mt-5 ${styles.even_animation}` : `mb-5 ${styles.odd_animation}`} />
                    ))}
                </Box>
            </Box >
        </StyledEngineProvider>
    )
}

export default IntegrationsImageCols;