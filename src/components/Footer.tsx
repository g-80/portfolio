import { SiNextDotJs, SiTypescript, SiGithub } from "react-icons/si";
import styles from "../../styles/Footer.module.css";
import dynamic from "next/dynamic";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <span>
        Built with:
        <span data-tip="TypeScript" data-delay-show="300" data-for="ts-tooltip">
          <SiTypescript className={styles.footer_icon} />
        </span>
        <ReactTooltip
          type="light"
          effect="solid"
          className={styles.tooltip}
          id="ts-tooltip"
        />
        /
        <span
          data-tip="Next.js"
          data-delay-show="300"
          data-for="next.js-tooltip"
        >
          <SiNextDotJs className={styles.footer_icon} />
        </span>
        <ReactTooltip
          type="light"
          effect="solid"
          className={styles.tooltip}
          id="next.js-tooltip"
        />
      </span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/g-80"
      >
        <SiGithub size={32} display="block" color="#fff" />
      </a>
    </footer>
  );
};
export default Footer;
