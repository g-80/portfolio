import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import styles from "../../styles/Projects.module.css";

interface ProjectProps {
  image: StaticImageData;
  name: string;
  description: string;
  tags: { name: string; cssClass: string; iconElement: JSX.Element }[];
  github: string;
  link: string | null;
}

const Project = ({
  image,
  name,
  description,
  tags,
  github,
  link,
}: ProjectProps): JSX.Element => {
  return (
    <div className={styles.project_item}>
      <Image
        src={image}
        alt="project screenshot"
        width={920}
        height={520}
        className={styles.image}
      ></Image>
      <div className={styles.details}>
        <h3>{name}</h3>
        <div className={styles.tags}>
          {tags.map((tag) => {
            return (
              <div key={tag.name} className={styles[tag.cssClass]}>
                {tag.iconElement}

                <span>{tag.name}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.links}>
          <a target="_blank" rel="noopener noreferrer" href={github}>
            <SiGithub size={28} className={styles.icons} />
          </a>
          {link && (
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <FiExternalLink size={28} className={styles.icons} />
            </a>
          )}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
