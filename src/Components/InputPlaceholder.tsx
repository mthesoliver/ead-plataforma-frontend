'use client'

import styles from 'Ead/Styles/_your-course-placeholder.module.scss';
import { useState } from 'react';
import Button from './Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box } from '@mui/material';

function InputPlaceholder() {
    const [input, setInput] = useState('');

    const handleInput = (event: any) => {
        setInput(event.target.value);
    }

    return (
        <Box className={"m-4 align-itens-center " + styles.placeholder_wrapper} >
            <input onInput={handleInput} type="text" className="text-end border-0 p-2 pe-0" placeholder="seu site" aria-label="Recipient's username" aria-describedby="basic-addon2" value={input} />
            <span className=" text-start border-0 p-2 ps-0 fw-bolder">.eadplataforma.app</span>
            <span className=" text-end border-0 p-2">
                <Button givenIcon={PlayArrowIcon} givenClass="rounded-pill"><span className="fw-bolder">Criar EAD</span></Button>
            </span>
        </Box >
    )
}

export default InputPlaceholder;