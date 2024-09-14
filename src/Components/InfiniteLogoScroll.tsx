'use client'

import * as React from 'react';

import styles from "Ead/Styles/_infinite-scroll.module.scss";
import { Box } from '@mui/material';
import Image from 'next/image';

function InfiniteLogoScroll() {
    const images: string[] = [
        "/assets/logos/Logo-parceiro-BYD.png",
        "/assets/logos/Logo-parceiro-Consigaz.png",
        "/assets/logos/Logo-parceiro-dexco.png",
        "/assets/logos/Logo-parceiro-Estela-bet.png",
        "/assets/logos/Logo-parceiro-JohnDeere.png",
        "/assets/logos/Logo-parceiro-Microcamp.png",
        "/assets/logos/Logo-parceiro-Mitsubishi.png",
        "/assets/logos/Logo-parceiro-Unimed.png",
    ]

    return (
        <Box className={"position-relative d-flex flex-row justify-content-center align-items-center py-5 w-100 " + styles.infinite_scroll_container}>
            <Box className={"position-absolute d-flex justify-content-center left-0 gap-4"}>
                <Box className={"d-flex align-items-center justify-content-center w-100 " + styles.overlay_images} />
                {[...images, ...images].map((item, index) => (
                    <Image key={index} src={item} width={205} height={82} alt={`Logotipo parceiro ${item.split('-').slice(-1)}`} style={{ objectFit: "cover" }}
                        className={styles.infinite_scroll_animation} />
                ))}
            </Box>
        </Box>
    )
}

export default InfiniteLogoScroll;