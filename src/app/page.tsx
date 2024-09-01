import styles from "./page.module.scss";
import Header from "Ead/Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main + ' ' + styles.center}>

      </main >
    </>
  );
}
