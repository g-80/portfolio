import ProjectsList from "../src/components/ProjectsList";
import styles from "../styles/Projects.module.css";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | G-web</title>
        <meta name="description" content="A portfolio of G" />
      </Head>
      <div className={styles.content}>
        <h1>My Projects</h1>
        <ProjectsList />
      </div>
    </>
  );
}
