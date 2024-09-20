'use client'

import { Stack, StyledEngineProvider } from '@mui/material';
import styles from 'Ead/Styles/_navigation.module.scss';
import Link from 'next/link';

export type NavigationType = {
    direction?: string
    open?: boolean;
}

function Navigation({ direction = 'row', open = false }: Readonly<NavigationType>) {
    return (
        <StyledEngineProvider injectFirst>
            <Stack id={'nav_container'} component={'nav'} className={styles.nav_bar} sx={{ visibility: !open ? 'hidden' : 'visible' }}>
                <ul className={`fw-light flex-${direction} ` + styles.nav_list + ' ' + (open ? styles.open : styles.closed)}>
                    <Link href="/#best_fee_container">
                        <li>Taxas</li>
                    </Link>
                    <Link href="/#features_container">
                        <li>Recursos</li>
                    </Link>
                    <Link href="/#integrations_container">
                        <li>Integrações</li>
                    </Link>
                    <Link href="/#price_container">
                        <li>Planos</li>
                    </Link>
                    <Link href="/#form_container">
                        <li>Ajuda</li>
                    </Link>
                </ul>
            </Stack >
        </StyledEngineProvider>

    )
}

export default Navigation;