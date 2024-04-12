import React from "react";
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';
import styles from "./Footer.module.scss";
const Footer = () => {
  const projectRepoLink = "https://github.com/MakeRedundant/Higher-Lower_Anime";

  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()}{" "}
        <a href="https://brian-trang-portfolio.netlify.app">Brian Trang</a>. All Rights Reserved •{" "}
        <a href="mailto:brian.trang9@gmail.com">contact@brian.trang9.com</a>
      </p>
      <div id={styles.socialLinks}>
        <a href="https://brian-trang-portfolio.netlify.app/" className={styles.iconLink}>
          <FaGlobe size="2em" color="white" />
        </a>
        <a href="https://github.com/MakeRedundant" className={styles.iconLink}>
          <FaGithub size="2em" color="white" />
        </a>
        <a href="https://www.linkedin.com/in/brian-trang-developer" className={styles.iconLink}>
          <FaLinkedin size="2em" color="white" />
        </a>
      </div>
      <div className={styles.repo}>
        <a href={projectRepoLink} className={styles.repoAnchor}>
          <FaGithub size="3em" color="white" />
          View this project on Github
        </a>
      </div>
    </footer>
  );
};


export default Footer;
