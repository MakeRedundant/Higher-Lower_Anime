import styles from "./About.module.scss";
export default function About() {
  return (
    <>
      <h2>ABOUT</h2>
      <div className={styles.content}>
        <p>
          This project was made by Brian Trang for fun 
        </p>
        <p>
          The API used in this project was{" "}
          <a href="https://jikan.moe/">Jikan</a>, which fetches data from{" "}
          <a href="https://myanimelist.net/">MyAnimeList</a>
        </p>
        <p>
          The top 200 Anime sorted by popularity and matched against each other. <br/>
          Should you take it seriously? Heavens no, enjoy watching what you want
        </p>
      </div>
    </>
  );
}
