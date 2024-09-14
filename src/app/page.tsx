'use client';

import CardCustomBorder from "Ead/Components/CardCustomBorder";
import styles from "./page.module.scss";
import Header from "Ead/Components/Header";
import VideoPlaceholder from "Ead/Components/VideoPlaceholder";
import YourCoursePlaceholder from "Ead/Components/YourCoursePlaceholder";

import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography } from "@mui/material";
import Carousel from "Ead/Components/SliderCustom";
import HeroTextCustom from "Ead/Components/HeroTextCustom";
import CardSimple from "Ead/Components/CardSimple";
import Button from "Ead/Components/Button";
import Image from "next/image";
import StampCircle from "Ead/Components/StampCircle";
import InfiniteLogoScroll from "Ead/Components/InfiniteLogoScroll";
import YouTube from "react-youtube";

export default function Home() {
  return (
    <>
      <Header />
      <main className={"container " + styles.main}>

        <section id="video_container">
          <YourCoursePlaceholder />
          <div>
            <VideoPlaceholder videoId="0yrJU7b09Oc" />
          </div>
        </section>

        <section id="cards_container" className="container mb-3 w-100">
          <Typography gutterBottom className='fw-semibold mb-3 z3 position-relative ' sx={{ fontSize: 44, lineHeight: 1.4, textAlign: 'center', fontFamily: "Rajdhani" }} >
            Veja as possibilidades com a EAD Plataforma
          </Typography>
          <div className={"z3 position-relative"}>
            <Carousel>
              <CardCustomBorder givenIcon={ImportantDevicesIcon}
                title="Venda seus cursos em nossa vitrine"
                content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
              <CardCustomBorder givenIcon={Diversity3Icon}
                title="Criação de cursos coorporativos"
                content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
              <CardCustomBorder givenIcon={DashboardCustomizeIcon}
                title="Transforme sua plataforma para seu nicho"
                content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
              <CardCustomBorder givenIcon={ImportantDevicesIcon}
                title="Venda seus cursos em nossa vitrine"
                content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
              <CardCustomBorder givenIcon={Diversity3Icon}
                title="Criação de cursos coorporativos"
                content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
              <CardCustomBorder givenIcon={DashboardCustomizeIcon}
                title="Transforme sua plataforma para seu nicho"
                content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
            </Carousel>
          </div>
        </section>

        <section id="cards_img_container" className="container d-flex flex-column gap-4 row mb-5 w-100">
          <HeroTextCustom sub={"da nossa plataforma?"} title={"Quais são os principais recursos"} titleSize={80} />
          <div className="d-flex flex-row gap-4 flex-nowrap">
            <CardSimple title="EAD Live"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
              imagePath="/assets/images/bg_card_image_2.png" size={7} />
            <CardSimple title="EAD Player"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
              imagePath="/assets/images/bg_card_image_1.png" size={5} />
          </div>
          <div className="d-flex flex-row gap-4 flex-nowrap">
            <CardSimple title="Provas e Certificados"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
              imagePath="/assets/images/bg_card_image_4.png" size={5} />
            <CardSimple title="EAD Checkout"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
              imagePath="/assets/images/bg_card_image_3.png" size={7} />
          </div>
          <section className="d-flex flex-row gap-4 flex-nowrap text-center justify-content-center align-items-center">
            <div className="justify-content-center align-items-center">
              <Button givenClass="rounded-pill fw-light p-3">Confira todas as funcionalidades</Button>
            </div>
            <div className="d-flex flex-row text-center justify-content-end align-items-end gap-4">
              <Typography gutterBottom className='fw-light mb-2' sx={{ fontSize: 20, fontFamily: "Rajdhani" }} >
                ou
              </Typography>
              <Typography gutterBottom className='fw-bold' sx={{ fontSize: 26, fontFamily: "Rajdhani" }} >
                Crie sua plataforma agora mesmo
              </Typography>
            </div>
          </section>
        </section>

        <section id="best_taxes_container" className="container d-flex flex-column gap-4 row my-3 w-100">
          <HeroTextCustom sub={"do mercado"} title={"As melhores taxas"} titleSize={86} />
        </section>

        <section id="trust_us_container" className="container d-flex flex-column gap-4 row my-3 w-100">
          <HeroTextCustom sub={"Sucesso com nossa plataforma EAD"} title={"Quem confia em nós!"} titleSize={60} />
          <figure>
            <Image src="/assets/images/trust_us_image.png" width={1440} height={450} alt="Imagem com clientes da empresa"
              className="position-relative top-100 start-50 translate-middle-x" placeholder="blur" blurDataURL="/assets/images/trust_us_image.png" loading="lazy" />
          </figure>
          <section className="text-center my-2 py-2">
            <StampCircle>Mais de 1.600 escolas confiam em nós</StampCircle>
            <InfiniteLogoScroll />
          </section>
        </section>

        <section id="light_container" className={"container gap-4 p-5 bg-light " + styles.full_width + ' ' + styles.align_to_top_el}>
          <div className={"container d-flex flex-column my-5 " + styles.inner_contents}>
            <section id="clients_feedback_container" className={"d-flex flex-column align-items-center"}>
              <Typography gutterBottom className='fw-bolder mb-3 z3 position-relative ' sx={{ fontSize: 44, lineHeight: 1.4, textAlign: 'center', fontFamily: "Rajdhani", color: "#7C038E" }} >
                Veja o que nossos cliente falam sobre nós
              </Typography>
              <div className={"d-inline-flex flex-row gap-4 justify-content-center align-items-center"}>
                <YouTube videoId={'0yrJU7b09Oc'} className={styles.round_border_video} />
                <YouTube videoId={'0yrJU7b09Oc'} className={styles.round_border_video} />
              </div>

              <section className="d-flex flex-row gap-4 flex-nowrap text-center justify-content-center align-items-center my-5">
                <div className="justify-content-center align-items-center">
                  <Button givenClass="rounded-pill fw-light p-3">Quero vender como eles!</Button>
                </div>
                <div className="d-flex flex-row text-center justify-content-end align-items-end gap-4">
                  <Typography gutterBottom className='fw-semibold mb-2' sx={{ fontSize: 20, fontFamily: "Rajdhani", color: "#1C0237" }} >
                    ou
                  </Typography>
                  <Typography gutterBottom className='fw-bold' sx={{ fontSize: 26, fontFamily: "Rajdhani", color: "#1C0237" }} >
                    Crie sua conta gratuitamente
                  </Typography>
                </div>
              </section>
            </section>

            <section id="customize_container" className={"d-flex flex-row gap-4"}>
              <div className="justify-content-center align-items-center col-4 mt-5">
                <HeroTextCustom sub={"do seu jeito!"} title={"Sua plataforma EAD,"} titleSize={80} colorMode={"light"} align="left" />
                <Typography sx={{ color: "#3F3F3F", fontSize: 26 }}>
                  Na EAD você também pode personalizar sua plataforma em estilo Netflix!
                </Typography>
                <div className="mt-5">
                  <Button givenClass="rounded-pill fw-light p-4 fs-6">Comece agora mesmo</Button>
                </div>
              </div>

              <div className="justify-content-center align-items-center">
                <Image src={"/assets/images/customize/custom_dark_purp.png"} width={1276} height={830} alt="Layout personalizado" />
              </div>
            </section>
          </div>
        </section >

      </main >
      <footer>

      </footer>
    </>
  );
}
