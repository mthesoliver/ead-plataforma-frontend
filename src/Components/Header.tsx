'use client'

import Image from "next/image";
import Button from "./Button";
import Navigation from "./Navigation";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import styles from "Ead/Styles/_header.module.scss";

function Header() {
    const phoneNumber: string = '(11) 3136-0017';

    return (
        <header className={"my-4 container d-flex " + styles.header_width}>
            <Image src={'/assets/ead_main_logo.png'} alt='Logotipo da empresa Ead Plataforma' width={160} height={90} loading="eager" placeholder="blur" blurDataURL="/assets/ead_main_logo.png"></Image>
            <Navigation />
            <Button givenIcon={LocalPhoneOutlinedIcon} givenClass={"rounded-pill fw-light"}><span className="fw-light">{phoneNumber}</span></Button>
        </header >
    )
}

export default Header;