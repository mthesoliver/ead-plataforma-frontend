'use client'

import styles from 'Ead/Styles/_button.module.scss';
import { ButtonBase } from '@mui/material';
import { ButtonType } from 'Ead/Types/ButtonType';

function Button({ children, givenIcon: GivenIcon, givenClass, btnColor, rounded }: Readonly<ButtonType>) {
    const stylesClass: string = (btnColor === 'light' ? styles.btn_color_light : styles.btn_color_primary) + ' ' + (rounded ? 'rounded-pill' : '') + ' ' + styles.btn_fs + ' ' + styles.btn_wrapper;


    return (
        <ButtonBase type='button' className={'btn p-2 px-4 ' + stylesClass + ' ' + givenClass}>
            {GivenIcon && (
                <span className="me-2">
                    <GivenIcon />
                </span>
            )}
            {children}
        </ButtonBase >
    )
}

export default Button;