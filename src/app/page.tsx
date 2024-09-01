import styles from "./page.module.scss";
import Header from "Ead/Components/Header";
import YourCoursePlaceholder from "Ead/Components/YourCoursePlaceholder";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <YourCoursePlaceholder />
      </main >
    </>
  );
}
