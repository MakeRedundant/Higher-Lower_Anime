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
          The top 200 Anime sorted by popularity are fetched from MAL and matched against each other.
        </p>
        {/* <p>The game will break if you reach a score of 75 ;)</p> */}
      </div>
    </>
  );
}
