import Head from "next/head";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <div>
      <Head>
        <title>Proyectos</title>
      </Head>
      <main className={styles.main}>
        <Projects />
      </main>
    </div>
  );
}
