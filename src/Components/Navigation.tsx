'use client'

import { Stack, StyledEngineProvider } from '@mui/material';
import styles from 'Ead/Styles/_navigation.module.scss';
import Link from 'next/link';

export type NavigationType = {
    direction?: string
    open?: boolean;
    handleClick?: () => void;
}

function Navigation({ direction = 'row', open = false, handleClick }: Readonly<NavigationType>) {
    return (
        <StyledEngineProvider injectFirst>
            <Stack id={'nav_container'} component={'nav'} className={styles.nav_bar} sx={{ visibility: !open ? 'hidden' : 'visible' }}>
                <ul className={`fw-medium flex-${direction} ` + styles.nav_list + ' ' + (open ? styles.open : styles.closed)}>
                    <Link href="/#best_fee_container" onClick={handleClick}>
                        <li>Taxas</li>
                    </Link>
                    <Link href="/#features_container" onClick={handleClick}>
                        <li>Recursos</li>
                    </Link>
                    <Link href="/#integrations_container" onClick={handleClick}>
                        <li>Integrações</li>
                    </Link>
                    <Link href="/#price_container" onClick={handleClick}>
                        <li>Planos</li>
                    </Link>
                    <Link href="/#form_container" onClick={handleClick}>
                        <li>Ajuda</li>
                    </Link>
                </ul>
            </Stack >
        </StyledEngineProvider>

    )
}

export default Navigation;