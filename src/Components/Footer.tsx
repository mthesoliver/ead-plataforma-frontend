'use client'

import Image from "next/image";
import styles from "Ead/Styles/_footer.module.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import Link from "next/link";
import useResize from "Ead/CustomHooks/useResize";

function Footer() {
    const { isMobile } = useResize();

    return (
        <section id="footer_container" className={"my-5 py-5 align-items-start container d-flex flex-row row " + styles.footer_width}>
            <div className={`d-flex flex-column align-items-${!isMobile ? 'start' : 'center'} col col-${!isMobile ? 5 : 12} gap-2 ` + (isMobile ? 'justify-content-center gap-3 mb-5' : '')}>
                <Image src={'/assets/images/ead_horizontal_footer_logo.png'}
                    alt='Logotipo da empresa Ead Plataforma' width={307} height={65} loading="eager"
                    placeholder="blur" blurDataURL="/assets/images/ead_horizontal_footer_logo.png" />
                <Stack direction={'row'} useFlexGap spacing={2} className={"mt-3 ms-2"}>
                    <Box>
                        <Link href={'#'}>
                            <FacebookIcon />
                        </Link>
                    </Box>
                    <Box>
                        <Link href={'#'}>
                            <InstagramIcon />
                        </Link>
                    </Box>
                    <Box>
                        <Link href={'#'}>
                            <LinkedInIcon />
                        </Link>
                    </Box>
                    <Box>
                        <Link href={'#'}>
                            <PublicIcon />
                        </Link>
                    </Box>
                </Stack>
                <span className={"mt-3 ms-2"}>
                    <Typography sx={{ fontSize: 16 }} className="fw-light">
                        © 2024 EAD Plataforma.<br></br>
                        Todos os direitos reservados.
                    </Typography>
                </span>

            </div>

            <div className={`d-flex flex-column align-items-start col col-${!isMobile ? 2 : 5} gap-2`}>
                <List className="d-flex flex-column col gap-2">
                    <ListItem>
                        <Typography className="fw-bolder">
                            EAD DOCS
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Link href={'#'}>
                            EAD Checkout
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={'#'}>
                            EAD Live
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={'#'}>
                            EAD Store
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={'#'}>
                            API
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={'#'}>
                            Webhooks
                        </Link>
                    </ListItem>
                </List>
            </div>

            <div className={`d-flex flex-column align-items-start col col-${!isMobile ? 2 : 5} gap-2`}>
                <List className="d-flex flex-column col gap-2">
                    <ListItem>
                        <Typography className="fw-bolder">
                            SUPORTE
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Link href={'#'}>
                            Fale conosco
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={'#'}>
                            Central de ajuda
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={'#'}>
                            Termos de uso
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={'#'}>
                            Política de privacidade
                        </Link>
                    </ListItem>
                </List>
            </div>

            <div className={`d-flex flex-${!isMobile ? 'column' : 'row'} align-items-${!isMobile ? 'start' : 'center'} col col-${!isMobile ? 1 : 12} gap-2 ` + (isMobile ? 'justify-content-center gap-4 mt-5' : '')}>
                <Image src={'/assets/images/amazon_logo.png'}
                    alt='Logotipo da amazon' width={!isMobile ? 100 : 100 / 1.6} height={!isMobile ? 75 : 75 / 1.6} loading="eager"
                    placeholder="blur" blurDataURL="/assets/images/ead_horizontal_footer_logo.png" />
                <Image src={'/assets/images/GPTW_logo.png'}
                    alt='Logotipo do Great Place to Work' width={!isMobile ? 100 : 100 / 2} height={!isMobile ? 166 : 166 / 2} loading="eager"
                    placeholder="blur" blurDataURL="/assets/images/ead_horizontal_footer_logo.png" />
            </div>
        </section >
    )
}

export default Footer;