'use client'

import styles from 'Ead/Styles/_your-course-placeholder.module.scss';
import { useEffect, useState } from 'react';
import Button from './Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, FormHelperText, Stack, StyledEngineProvider } from '@mui/material';
import { sanitizeString } from 'Ead/Helper/StringsHelper';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import useResize from 'Ead/CustomHooks/useResize';

function InputPlaceholder() {
    const { isMobile } = useResize();
    const [input, setInput] = useState('');
    const [placeholder, setPlaceholder] = useState(''); // Placeholder atual
    const [wordIndex, setWordIndex] = useState(0); // Índice da palavra atual
    const [isDeleting, setIsDeleting] = useState(false); // Indicador de deletar ou adicionar
    const [charIndex, setCharIndex] = useState(0); // Índice da letra atual
    const [delay, setDelay] = useState(200); // Velocidade de digitação/removal
    const [inputHelper, setInputHelper] = useState('');
    const [inputValid, setInputValid] = useState<boolean | null>(null);

    const placeholders = [
        'sua-empresa',
        'seu-curso',
        'sua-escola',
    ];

    useEffect(() => {
        const currentWord = placeholders[wordIndex]; // Palavra atual
        let typingTimeout: NodeJS.Timeout;

        // Função principal de digitação e remoção
        const handleTyping = () => {
            if (!isDeleting) {
                // Adicionar letras
                setPlaceholder(currentWord.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);

                if (charIndex + 1 === currentWord.length) {
                    // Quando a palavra está completa, esperar antes de deletar
                    typingTimeout = setTimeout(() => setIsDeleting(true), 200); // Pausa de 2 segundos
                    setTimeout(() => setIsDeleting(true), 1000);
                } else {
                    typingTimeout = setTimeout(handleTyping, delay); // Continuar adicionando letras
                }
            } else {
                // Remover letras
                setPlaceholder(currentWord.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);

                if (charIndex === 0) {
                    // Quando a palavra está completamente removida, passar para a próxima
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % placeholders.length); // Próxima palavra
                }
                typingTimeout = setTimeout(handleTyping, delay); // Continuar removendo letras
            }
        };

        typingTimeout = setTimeout(handleTyping, delay);

        return () => clearTimeout(typingTimeout); // Limpar timeout
    }, [charIndex, isDeleting, wordIndex]);

    useEffect(() => {
        if (isDeleting) {
            setDelay(100); // Velocidade mais rápida para remoção
        } else {
            setDelay(200); // Velocidade mais lenta para digitação
        }
    }, [isDeleting]);

    const handleInput = (event: any) => {
        const cleanInput = event.target.value;
        setInput(sanitizeString(cleanInput));
    };

    const handleSubmit = async (event: any, input: string) => {
        event.preventDefault();
        let url = `https://eadplataforma.com/check/username/${input}`;

        if (input !== '') {
            try {
                const response = await fetch(url);
                const text = await response.text().catch(err => {
                    console.log(err.message);
                });
                if (text === 'ok') {
                    setInputHelper('Ótimo! O nome está disponível e pronto para ser criado');
                    setInputValid(true);
                } else {
                    setInputHelper('Ops! Esse nome não está mais disponível. Que tal tentar outro?');
                    setInputValid(false);
                }
            } catch (error) {
                return ''
            }
        } else {
            setInputHelper('');
        };
    }

    return (
        <StyledEngineProvider injectFirst>
            <Stack >
                {isMobile && (
                    <>
                        <Box className={"m-4 p-2 " + styles.placeholder_wrapper} component={'form'} onSubmit={(e: any) => handleSubmit(e, input)}>
                            <input
                                onInput={handleInput}
                                required
                                type="text"
                                className="text-end border-0 pe-0"
                                placeholder={placeholder}
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={input}
                            />
                            <span className="text-start border-0 ps-0 fw-bolder">
                                .eadplataforma.app
                            </span>

                            {inputValid !== null && (
                                inputValid ? (
                                    <span>
                                        <CheckIcon sx={{ color: 'green', fontSize: '32px', marginInline: '10px!important' }} />
                                    </span>
                                ) : (
                                    <span>
                                        <CloseIcon sx={{ color: 'red', fontSize: '32px', marginInline: '10px!important' }} />
                                    </span>
                                )
                            )}

                            <span className="text-end border-0 p-2 ">
                                <Button rounded type='submit'>
                                    <span className="fw-bolder">Criar EAD</span>
                                </Button>
                            </span>
                        </Box>
                        <FormHelperText sx={{ color: inputValid ? '#4BFF0C' : '#FF0C37', textAlign: 'center', fontSize: '12px', lineHeight: '16px!important', marginTop: '-20px !important', marginBottom: '14px !important', marginInline: "auto!important", maxWidth: '40%' }} >
                            {inputHelper}
                        </FormHelperText>
                    </>
                )}

                {!isMobile && (
                    <>
                        <Box className={"m-4 p-2 " + styles.placeholder_wrapper} component={'form'} onSubmit={(e: any) => handleSubmit(e, input)}>
                            <input
                                onInput={handleInput}
                                required
                                type="text"
                                className="text-end border-0 pe-0"
                                placeholder={placeholder}
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={input}
                            />
                            <span className="text-start border-0 ps-0 fw-bolder">
                                .eadplataforma.app
                            </span>
                            <span className="text-end border-0 p-2 ms-4">
                                {inputValid !== null && (
                                    inputValid ? (
                                        <span>
                                            <CheckIcon sx={{ color: 'green', fontSize: '32px', marginRight: '1rem!important' }} />
                                        </span>
                                    ) : (
                                        <span>
                                            <CloseIcon sx={{ color: 'red', fontSize: '32px', marginRight: '1rem!important' }} />
                                        </span>
                                    )
                                )}

                                <Button givenIcon={PlayArrowIcon} rounded type='submit'>
                                    <span className="fw-bolder">Criar EAD</span>
                                </Button>
                            </span>
                        </Box>
                        <FormHelperText sx={{ color: inputValid ? '#4BFF0C' : '#FF0C37', textAlign: 'center', fontSize: '16px', marginTop: '-10px !important' }}>
                            {inputHelper}
                        </FormHelperText>
                    </>
                )}
            </Stack>
        </StyledEngineProvider>
    );
}

export default InputPlaceholder;
