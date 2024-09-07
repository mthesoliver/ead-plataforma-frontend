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

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <YourCoursePlaceholder />
        <section id="video-placeholder">
          <VideoPlaceholder videoId="0yrJU7b09Oc" />
          <div className={styles.grid}>
            <CardCustomBorder icon={Diversity3Icon} title="Criação de cursos coorporativos" content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
            <CardCustomBorder icon={ImportantDevicesIcon} title="Venda seus cursos em nossa vitrine" content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
            <CardCustomBorder icon={DashboardCustomizeIcon} title="Transforme sua plataforma para seu nicho" content="Lorem ipsum dolor sit amet consectetur. Ipsum dolor facilisi eget nibh proin est dictum sit. Placerat." />
          </div>
        </section>
      </main >
    </>
  );
}
