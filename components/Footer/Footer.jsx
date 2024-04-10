import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  const imgPath = "https://ajayliu.com/img";
  const projectRepoLink = "https://github.com/MakeRedundant/Higher-Lower_Anime";
  return (
    <>
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://brian-trang-portfolio.netlify.app">Brian Trang</a>. All Rights Reserved •{" "}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@brian.trang9.com">
            contact@brian.trang9.com
          </a>
        </p>
        <div id={styles.socialLinks}>
          <a href="https://brian-trang-portfolio.netlify.app/">
            <img src={imgPath + "/web_icon.svg"} alt="website logo" />
          </a>
          <a href="https://github.com/MakeRedundant">
            <img src={imgPath + "/github.svg"} alt="github logo" />
          </a>
          <a href="www.linkedin.com/in/brian-trang-developer">
            <img src={imgPath + "/linkedin.svg"} alt="linkedin logo" />
          </a>
        </div>
        <div className={styles.repo}>
          <a href={projectRepoLink} className={styles.repoAnchor}>
            <img src={imgPath + "/repo.svg"} />
            View this project on Github
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
