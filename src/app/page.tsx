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

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section id="video_container">
          <YourCoursePlaceholder />
          <div>
            <VideoPlaceholder videoId="0yrJU7b09Oc" />
          </div>
        </section>

        <section id="cards_container" className="mb-3 w-100">
          <Typography gutterBottom className='fw-semibold mb-3 z3 position-relative ' sx={{ fontSize: 44, lineHeight: 1.4, textAlign: 'center', fontFamily: "Rajdhani" }} >
            Veja as possibilidades com a EAD Plataforma
          </Typography>
          <div className={"z3 position-relative"}>
            <Carousel>
              <CardCustomBorder givenIcon={ImportantDevicesIcon} title="Venda seus cursos em nossa vitrine" content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
              <CardCustomBorder givenIcon={Diversity3Icon} title="Criação de cursos coorporativos" content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
              <CardCustomBorder givenIcon={DashboardCustomizeIcon} title="Transforme sua plataforma para seu nicho" content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
              <CardCustomBorder givenIcon={ImportantDevicesIcon} title="Venda seus cursos em nossa vitrine" content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
              <CardCustomBorder givenIcon={Diversity3Icon} title="Criação de cursos coorporativos" content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
              <CardCustomBorder givenIcon={DashboardCustomizeIcon} title="Transforme sua plataforma para seu nicho" content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
            </Carousel>
          </div>
        </section>

        <section id="cards_img_container" className="d-flex flex-column row-gap-4 row mb-5 w-100">
          <HeroTextCustom sub={"da nossa plataforma?"} title={"Quais são os principais recursos"} titleSize={80} />
          <div className="d-flex flex-row column-gap-4 flex-nowrap">
            <CardSimple title="EAD Live" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim" imagePath="/assets/images/bg_card_image_2.png" size={7} />
            <CardSimple title="EAD Player" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim" imagePath="/assets/images/bg_card_image_1.png" size={5} />
          </div>
          <div className="d-flex flex-row column-gap-4 flex-nowrap">
            <CardSimple title="Provas e Certificados" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim" imagePath="/assets/images/bg_card_image_4.png" size={5} />
            <CardSimple title="EAD Checkout" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim" imagePath="/assets/images/bg_card_image_3.png" size={7} />
          </div>
          <div className="d-flex flex-row column-gap-4 flex-nowrap text-center justify-content-center align-items-center">
            <div className="justify-content-center align-items-center">
              <Button givenClass="rounded-pill fw-light">Confira todas as funcionalidades</Button>
            </div>
            <div className="d-flex flex-row text-center justify-content-end align-items-end column-gap-4">
              <Typography gutterBottom className='fw-light mb-2' sx={{ fontSize: 16, fontFamily: "Rajdhani" }} >
                ou
              </Typography>
              <Typography gutterBottom className='fw-bold' sx={{ fontSize: 24, fontFamily: "Rajdhani" }} >
                Crie sua plataforma agora mesmo
              </Typography>
            </div>
          </div>
        </section>

        <section id="best_taxes_container" className="d-flex flex-column row-gap-4 row my-3 w-100">
          <HeroTextCustom sub={"do mercado"} title={"As melhores taxas"} titleSize={86} />
        </section>

        <section id="trust_us_container" className="d-flex flex-column row-gap-4 row my-3 w-100">
          <HeroTextCustom sub={"Sucesso com nossa plataforma EAD"} title={"Quem confia em nós!"} titleSize={60} />
          <figure>
            <Image src="/assets/images/trust_us_image.png" width={1440} height={450} alt="Imagem com clientes da empresa"
              className="position-relative top-100 start-50 translate-middle-x" placeholder="blur" blurDataURL="/assets/images/trust_us_image.png" loading="lazy" />
          </figure>
          <div className="container text-center my-4 py-4">
            <StampCircle>Mais de 1.600 escolas confiam em nós</StampCircle>
          </div>
        </section>
      </main >
    </>
  );
}
