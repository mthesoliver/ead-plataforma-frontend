'use client'

import Image from "next/image";
import styles from "Ead/Styles/_footer.module.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import { Box, List, ListItem, Stack, StyledEngineProvider, Typography } from "@mui/material";
import Link from "next/link";
import useResize from "Ead/CustomHooks/useResize";

function Footer() {
    const { isMobile } = useResize();

    return (
        <StyledEngineProvider injectFirst>
            {!isMobile && (

                <section id="footer_container" className={"my-5 py-5 align-items-start container d-flex flex-row row " + styles.footer_width}>
                    <div className={`d-flex flex-column align-items-start col col-5 gap-2 `}>
                        <Link href={'/'}>
                            <Image src={'/assets/images/ead_horizontal_footer_logo.png'}
                                alt='Logotipo da empresa Ead Plataforma' width={307} height={65} loading="eager"
                                placeholder="blur" blurDataURL="/assets/images/ead_horizontal_footer_logo.png" />
                        </Link>
                        <Stack direction={'row'} useFlexGap spacing={2} className={"mt-3 ms-2"}>
                            <Box>
                                <Link href={'https://www.facebook.com/eadplataforma'}>
                                    <FacebookIcon />
                                </Link>
                            </Box>
                            <Box>
                                <Link href={'https://www.linkedin.com/company/ead-plataforma/'}>
                                    <InstagramIcon />
                                </Link>
                            </Box>
                            <Box>
                                <Link href={'https://www.linkedin.com/company/ead-plataforma/ '}>
                                    <LinkedInIcon />
                                </Link>
                            </Box>
                            <Box>
                                <Link href={'https://blog.eadplataforma.com/'}>
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

                    <div className={`d-flex flex-column align-items-start col col-2 gap-2`}>
                        <List className="d-flex flex-column col gap-2">
                            <ListItem>
                                <Typography className="fw-bolder">
                                    EAD DOCS
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://eadplataforma.com/eadplayer'}>
                                    EAD Player
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://docs.eadplataforma.com/docs/ead-checkout'}>
                                    EAD Checkout
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://docs.eadplataforma.com/docs/aulas-ao-vivo'}>
                                    EAD Live
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://docs.eadplataforma.com/docs/ead-store'}>
                                    EAD Store
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://docs.eadplataforma.com/docs/api'}>
                                    API
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://docs.eadplataforma.com/docs/webhooks'}>
                                    Webhooks
                                </Link>
                            </ListItem>
                        </List>
                    </div>

                    <div className={`d-flex flex-column align-items-start col col-2 gap-2`}>
                        <List className="d-flex flex-column col gap-2">
                            <ListItem>
                                <Typography className="fw-bolder">
                                    SUPORTE
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://eadplataforma.com/contact'}>
                                    Fale conosco
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://docs.eadplataforma.com/'}>
                                    Central de ajuda
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'http://bit.ly/eadplataforma-contrato'}>
                                    Termos de uso
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://eadplataforma.com/privacy'}>
                                    Política de privacidade
                                </Link>
                            </ListItem>
                        </List>
                    </div>

                    <div className={`d-flex flex-column align-items-start col col-1 gap-2 `}>
                        <Image src={'/assets/images/amazon_logo.png'}
                            alt='Logotipo da amazon' width={100} height={75} loading="eager"
                            placeholder="blur" blurDataURL="/assets/images/ead_horizontal_footer_logo.png" />
                        <Image src={'/assets/images/GPTW_logo.png'}
                            alt='Logotipo do Great Place to Work' width={100} height={166} loading="eager"
                            placeholder="blur" blurDataURL="/assets/images/ead_horizontal_footer_logo.png" />
                    </div>
                </section >
            )}
            {isMobile && (

                <section id="footer_container" className={"my-5 py-5 align-items-start container d-flex flex-row row " + styles.footer_width}>
                    <div className={`d-flex flex-column align-items-center col col12 gap-2 justify-content-center gap-3 mb-5 `}>
                        <Link href={'/'}>
                            <Image src={'/assets/images/ead_horizontal_footer_logo.png'}
                                alt='Logotipo da empresa Ead Plataforma' width={307} height={65} loading="eager"
                                placeholder="blur" blurDataURL="/assets/images/ead_horizontal_footer_logo.png" />
                        </Link>
                        <Stack direction={'row'} useFlexGap spacing={2} className={"mt-3 ms-2"}>
                            <Box>
                                <Link href={'https://www.facebook.com/eadplataforma'}>
                                    <FacebookIcon />
                                </Link>
                            </Box>
                            <Box>
                                <Link href={'https://www.linkedin.com/company/ead-plataforma/'}>
                                    <InstagramIcon />
                                </Link>
                            </Box>
                            <Box>
                                <Link href={'https://www.linkedin.com/company/ead-plataforma/ '}>
                                    <LinkedInIcon />
                                </Link>
                            </Box>
                            <Box>
                                <Link href={'https://blog.eadplataforma.com/'}>
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

                    <div className={`d-flex flex-column align-items-start col col-5 gap-2`}>
                        <List className="d-flex flex-column col gap-2">
                            <ListItem>
                                <Typography className="fw-bolder">
                                    EAD DOCS
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://eadplataforma.com/eadplayer'}>
                                    EAD Player
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://docs.eadplataforma.com/docs/ead-checkout'}>
                                    EAD Checkout
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://docs.eadplataforma.com/docs/aulas-ao-vivo'}>
                                    EAD Live
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://docs.eadplataforma.com/docs/ead-store'}>
                                    EAD Store
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://docs.eadplataforma.com/docs/api'}>
                                    API
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://docs.eadplataforma.com/docs/webhooks'}>
                                    Webhooks
                                </Link>
                            </ListItem>
                        </List>
                    </div>

                    <div className={`d-flex flex-column align-items-start col col-5 gap-2`}>
                        <List className="d-flex flex-column col gap-2">
                            <ListItem>
                                <Typography className="fw-bolder">
                                    SUPORTE
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://eadplataforma.com/contact'}>
                                    Fale conosco
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://docs.eadplataforma.com/'}>
                                    Central de ajuda
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'http://bit.ly/eadplataforma-contrato'}>
                                    Termos de uso
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={'https://eadplataforma.com/privacy'}>
                                    Política de privacidade
                                </Link>
                            </ListItem>
                        </List>
                    </div>

                    <div className={`d-flex flex-row align-items-center col col-$12 gap-2 justify-content-center gap-4 mt-5 `}>
                        <Image src={'/assets/images/amazon_logo.png'}
                            alt='Logotipo da amazon' width={100 / 1.6} height={75 / 1.6} loading="eager"
                            placeholder="blur" blurDataURL="/assets/images/ead_horizontal_footer_logo.png" />
                        <Image src={'/assets/images/GPTW_logo.png'}
                            alt='Logotipo do Great Place to Work' width={100 / 2} height={166 / 2} loading="eager"
                            placeholder="blur" blurDataURL="/assets/images/ead_horizontal_footer_logo.png" />
                    </div>
                </section >
            )}
        </StyledEngineProvider >
    )
}

export default Footer;