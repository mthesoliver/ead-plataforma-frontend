'use client'

import styles from 'Ead/Styles/_your-course-placeholder.module.scss';
import { useState } from 'react';
import Button from './Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function InputPlaceholder() {
    const [input, setInput] = useState('');
    const play = <PlayArrowIcon />;

    const handleInput = (event: any) => {
        setInput(event.target.value);
    }

    return (
        <div className="input-group m-4 input-group-lg justify-itens-center">
            <input onInput={handleInput} type="text" className="form-control text-end border-0 rounded-start-pill p-2 pe-0" placeholder="seu site" aria-label="Recipient's username" aria-describedby="basic-addon2" value={input} />
            <span className="form-control text-start border-0 btn-group-vertical p-2 ps-0">.eadplataforma.app</span>
            <span className="form-control text-end border-0 rounded-end-pill p-2">
                <Button givenIcon={play}>Criar EAD</Button>
            </span>
        </div >
    )
}

export default InputPlaceholder;