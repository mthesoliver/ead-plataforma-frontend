'use client'

import * as React from 'react';

import { Box, ButtonBase, FormControl, FormHelperText, Input, StyledEngineProvider } from '@mui/material';
import useResize from 'Ead/CustomHooks/useResize';

function DemonstrationForm() {
    const { isMobile } = useResize();
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [emailError, setEmailError] = React.useState(false)
    const [nameError, setNameError] = React.useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setEmailError(false)
        setNameError(false)

        if (email == '') {
            setEmailError(true)
        }
        if (name == '') {
            setNameError(true)
        }

        if (email && name) {
            console.log(email, name)
        }
    }

    return (
        <StyledEngineProvider injectFirst>
            <Box className={`d-flex flex-column col w-${!isMobile ? 50 : 100} m-auto`} component={'form'} onSubmit={(e: any) => handleSubmit(e)}>
                <FormControl >
                    <Input id="email-field" name="email-field" placeholder="Seu email" type="email" inputMode="email"
                        aria-describedby='my-helper-text'
                        fullWidth
                        className={'mt-3'}
                        value={email} onChange={e => setEmail(e.target.value)}
                        required
                        error={emailError}
                        disableUnderline
                        sx={{ background: 'rgba(255,255,255,.1)', padding: '1rem !important', borderRadius: '8px', border: "1px solid rgba(255,255,255,.6)", color: '#ffffff' }} />
                    <FormHelperText id="my-helper-text" sx={{ color: "rgba(255,255,255,.2)", fontSize: "12px!important", lineHeight: "16px!important" }}>Nós nunca iremos compartilhar seu email </FormHelperText>
                </FormControl>

                <FormControl >
                    <Input id="name-field" name="name-field" placeholder="Seu nome" type="text" inputMode="text"
                        fullWidth
                        className={'mt-3'}
                        value={name} onChange={e => setName(e.target.value)}
                        required
                        error={nameError}
                        disableUnderline
                        sx={{ background: 'rgba(255,255,255,.1)', padding: '1rem !important', borderRadius: '8px', border: "1px solid rgba(255,255,255,.6)", color: '#ffffff' }} />
                </FormControl>

                <ButtonBase type="submit"
                    className="btn my-3 p-3 fw-bold"
                    sx={{ background: 'rgba(255,255,255,.9)!important', textTransform: 'uppercase', borderRadius: "8px!important" }}>
                    Enviar
                </ButtonBase>
            </Box >
        </StyledEngineProvider>
    )
}

export default DemonstrationForm;