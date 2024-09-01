'use client'

import { useState, useLayoutEffect } from 'react';
import styles from 'Ead/Styles/_button.module.scss';

function Button({ children, givenIcon }: any) {
    const [icon, setIcon] = useState('');
    const stylesClass: string = styles.btn_color + ' ' + styles.btn_fs;

    useLayoutEffect(() => {
        if (icon !== null || icon !== undefined) {
            setIcon(givenIcon);
        } else {
            setIcon('');
        }
    }, []);

    return (
        <button type='button' className={'btn p-2 px-4 rounded-pill fw-light ' + stylesClass}>
            <span className='me-2'>
                {icon}
            </span>
            {children}
        </button>
    )
}

export default Button;