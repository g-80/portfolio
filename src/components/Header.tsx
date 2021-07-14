import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "../hooks/useWindowWidth.hook";
import styles from "../../styles/Header.module.css";
import navLogo from "../../public/nav-logo.svg";

const Header = (): JSX.Element => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMobileWidth = useWindowWidth(768);

  const hamburgerMenuBtn = (
    <button
      onClick={() => setMenuOpen((prev) => !prev)}
      className={styles.hamburger_btn}
    >
      {!isMenuOpen && <span>Menu</span>}
      <svg
        className={`${styles.ham} ${styles.hamRotate} ${styles.ham7} ${
          isMenuOpen && styles.active
        }`}
        viewBox="25 25 50 50"
        width="38"
      >
        <path
          className={`${styles.line} ${styles.top}`}
          d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
        />
        <path className={`${styles.line} ${styles.middle}`} d="m 70,50 h -40" />
        <path
          className={`${styles.line} ${styles.bottom}`}
          d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
        />
      </svg>
    </button>
  );
  const hamburgerMenu = (
    <div className={styles.hamburger_menu}>
      <nav className={styles.hamburger_nav}>
        <Link href="/">
          <button
            className={styles.hamburger_nav_link}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </button>
        </Link>
        <Link href="/projects">
          <button
            className={styles.hamburger_nav_link}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </button>
        </Link>
        <Link href="/contact">
          <button
            className={styles.hamburger_nav_link}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </button>
        </Link>
      </nav>
    </div>
  );

  const navLinks = (
    <>
      <nav className={styles.nav_links}>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </>
  );
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <a>
          <Image src={navLogo} alt="navbar logo" width={88} height={45} />
        </a>
      </Link>
      {isMobileWidth === true ? hamburgerMenuBtn : navLinks}
      {isMenuOpen && hamburgerMenu}
    </header>
  );
};

export default Header;
