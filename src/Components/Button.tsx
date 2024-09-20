'use client'

import styles from 'Ead/Styles/_button.module.scss';
import { ButtonBase, StyledEngineProvider } from '@mui/material';
import { ButtonType } from 'Ead/Types/ButtonType';
import Link from 'next/link';

function Button({ children, givenIcon: GivenIcon, givenClass, btnColor, rounded, link = "", ...rest }: Readonly<ButtonType>) {
    const stylesClass: string = (btnColor === 'light' ? styles.btn_color_light : styles.btn_color_primary) + ' ' + (rounded ? 'rounded-pill' : '') + ' ' + styles.btn_fs + ' ' + styles.btn_wrapper;


    return (
        <StyledEngineProvider injectFirst>
            {link && (

                <Link href={link}>
                    <ButtonBase {...rest} className={'btn p-2 px-4 ' + stylesClass + ' ' + givenClass}>
                        {GivenIcon && (
                            <span className="me-2">
                                <GivenIcon />
                            </span>
                        )}
                        {children}
                    </ButtonBase >
                </Link>
            )}

            {!link && (
                <ButtonBase {...rest} className={'btn p-2 px-4 ' + stylesClass + ' ' + givenClass}>
                    {GivenIcon && (
                        <span className="me-2">
                            <GivenIcon />
                        </span>
                    )}
                    {children}
                </ButtonBase >
            )}
        </StyledEngineProvider>
    )
}

export default Button;