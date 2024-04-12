import styles from "./AnimeDiv.module.scss";
export default function AnimeDiv({ obj, clickCallback, gameover }) {
  var numeral = require("numeral");
  var fanCount = numeral(obj.members).format("0.00a");

  const imageUrl = obj.images?.webp.image_url;
  return (
    <div className={styles.animeContainer}>
      <div className={styles.clickableRegion} onClick={clickCallback}>
        <img className={styles.animeImg} src={imageUrl} width="100%" height="70%" alt="Anime series"></img>
        <p>{obj.title}</p>
        {obj.reveal && (
          <p
            className={
              styles.fanCount +
              " " +
              (gameover
                ? obj?.higher
                  ? styles.higher
                  : styles.lower
                : styles.neutral)
            }
          >
            Fans: {fanCount}
          </p>
        )}
      </div>
    </div>
  );
}
