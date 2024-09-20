'use client'

import Image from "next/image";
import Button from "./Button";
import Navigation from "./Navigation";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import styles from "Ead/Styles/_header.module.scss";
import Link from "next/link";
import useResize from "Ead/CustomHooks/useResize";
import { Box, Stack, StyledEngineProvider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Close } from "@mui/icons-material";

function Header() {
    const [togle, setTogle] = useState<boolean>(false);
    const { isMobile } = useResize();
    const phoneNumber: string = '(11) 3136-0017';
    const phoneNumberLink: string = '551131360017';

    const handleTogle = () => {
        setTogle(!togle);
    }

    return (
        <StyledEngineProvider injectFirst>
            {isMobile && (
                <section className={"container mt-4 d-flex flex-row row m-auto " + styles.header_width}>
                    <div className={'d-flex flex-row justify-content-evenly align-items-center m-auto '}>
                        <Box className={'col-3 text-center'}>
                            {!togle ? (
                                <MenuIcon sx={{ fontSize: 42 }} onClick={handleTogle} />
                            ) : (
                                <Close sx={{ fontSize: 42 }} onClick={handleTogle} />
                            )}
                        </Box>
                        <Box className={'col-6 text-center'}>
                            <Image src={'/assets/ead_main_logo.png'} alt='Logotipo da empresa Ead Plataforma' width={160 / 1.5} height={90 / 1.5} loading="eager" placeholder="blur" blurDataURL="/assets/ead_main_logo.png"></Image>
                        </Box>
                        <Box className={'col-3 text-center'}>
                            <Button givenClass={"fw-light"} rounded>
                                <Link href={`tel:+${phoneNumberLink}`} className="fw-light">
                                    <LocalPhoneOutlinedIcon />
                                </Link>
                            </Button>
                        </Box>
                    </div>
                    <Stack direction={'column'} className="mt-5">
                        <Navigation direction="column" open={togle ?? true} />
                    </Stack>
                </section>
            )}

            {!isMobile && (
                <section className={"my-4 container d-flex " + styles.header_width}>
                    <Image src={'/assets/ead_main_logo.png'} alt='Logotipo da empresa Ead Plataforma' width={160} height={90} loading="eager" placeholder="blur" blurDataURL="/assets/ead_main_logo.png"></Image>
                    <Navigation open={true} />
                    <Button givenIcon={LocalPhoneOutlinedIcon} givenClass={"fw-light fs-6"} rounded>
                        <Link href={`tel:+${phoneNumberLink}`} className="fw-light">
                            {phoneNumber}
                        </Link>
                    </Button>
                </section>
            )}
        </StyledEngineProvider>
    )
}

export default Header;