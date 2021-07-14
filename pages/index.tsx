import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import shape from "../public/shape.svg";
import useWindowWidth from "../src/hooks/useWindowWidth.hook";
import styles from "../styles/Home.module.css";

export default function Home() {
  const isMobileWidth = useWindowWidth(768);

  const links = (
    <div className={styles.hero_links}>
      <Link href="/projects" passHref>
        <a className={styles.hero_link_primary}>View projects</a>
      </Link>
      <Link href="/contact">
        <a className={styles.hero_link_secondary}>Contact</a>
      </Link>
    </div>
  );

  const logo = (
    <Image src={shape} alt="logo of gweb" width={270} className={styles.logo} />
  );
  return (
    <>
      <Head>
        <title>G-Web</title>
        <meta name="description" content="A portfolio of G" />
      </Head>
      <div className={styles.hero}>
        <div className={styles.hero_text_container}>
          <p className={styles.hi}>{"Hi, I'm Ghaith"}</p>
          <p className={styles.hero_text}>
            I create websites. I use this to show some of my projects.
          </p>
        </div>
        {isMobileWidth === true ? links : logo}
      </div>
    </>
  );
}
