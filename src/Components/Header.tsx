import Image from "next/image";
import Button from "./Button";
import Navigation from "./Navigation";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function Header() {
    const phoneNumber: string = '(11) 3136-0017';
    const icon = <LocalPhoneOutlinedIcon />;

    return (
        <header className="my-4 container-fluid d-flex justify-content-evenly align-items-center">
            <Image src={'/assets/ead_main_logo.png'} alt='Logotipo da empresa Ead Plataforma' width={160} height={90} loading="eager"></Image>
            <Navigation />
            <Button givenIcon={icon}>{phoneNumber}</Button>
        </header >
    )
}

export default Header;