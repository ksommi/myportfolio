import Head from "next/head";
import Contact from "../components/Contact";
import styles from "../styles/Home.module.css";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contacto</title>
      </Head>
      <main className={styles.main}>
        <Contact />
      </main>
    </div>
  );
}
