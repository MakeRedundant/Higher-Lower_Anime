import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  const projectRepoLink = "https://github.com/MakeRedundant/Higher-Lower_Anime";
  return (
    <>
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://brian-trang-portfolio.netlify.app">Brian Trang</a>. All Rights Reserved •{" "}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=brian.trang9@gmail.com">
            contact@brian.trang9.com
          </a>
        </p>
        <div id={styles.socialLinks}>
          <a href="https://brian-trang-portfolio.netlify.app/">
            <img src="/web_icon.svg" alt="website logo" />
          </a>
          <a href="https://github.com/MakeRedundant">
            <img src="/github.svg" alt="github logo" />
          </a>
          <a href="www.linkedin.com/in/brian-trang-developer">
            <img src="/linkedin.svg" alt="linkedin logo" />
          </a>
        </div>
        <div className={styles.repo}>
          <a href={projectRepoLink} className={styles.repoAnchor}>
            <img src="/repo.svg" alt="git hub link" />
            View this project on Github
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
