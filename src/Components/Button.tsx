'use client'

import { useState, useLayoutEffect } from 'react';
import styles from 'Ead/Styles/_button.module.scss';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

function Button(props: Readonly<{ children: any, icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>, givenClass: string }>) {
    const [icon, setIcon] = useState<OverridableComponent<SvgIconTypeMap<{}, "svg">> | null>();
    const stylesClass: string = styles.btn_color + ' ' + styles.btn_fs;

    useLayoutEffect(() => {
        if (icon !== null || icon !== undefined) {
            const givenIcon = props.icon;
            setIcon(givenIcon);
        } else {
            setIcon(null);
        }
    }, []);

    return (
        <button type='button' className={'btn p-2 px-4 ' + stylesClass + ' ' + props.givenClass}>
            <span className='me-2'>
                <props.icon />
            </span>
            {props.children}
        </button >
    )
}

export default Button;