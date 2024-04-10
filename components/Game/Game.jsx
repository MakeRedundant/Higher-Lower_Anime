import styles from "./Game.module.scss";
import React, { useState, useEffect } from "react";

import AnimeDiv from "@components/AnimeDiv/AnimeDiv";
import shuffle from "shuffle-array";

import useWindowDimensions from "@components/windowDimensions";

export default function Game() {
  const pagesToGet = 3;
  const [page, setPage] = useState(() => {
    return 1;
  });
  const [loading, setLoading] = useState(() => {
    return true;
  });
  const [pool, setPool] = useState(() => {
    return [];
  });
  const [randList, setRandList] = useState(() => {
    return [];
  });
  const [score, setScore] = useState(() => {
    return 0;
  });
  const [champIndex, setChampIndex] = useState(() => {
    return 0;
  });
  const [champ, setChamp] = useState({ reveal: false });
  const [challenger, setChallenger] = useState({ reveal: false });
  const [gameover, setGameover] = useState(() => {
    return false;
  });
  const [resetGame, setResetGame] = useState(() => {
    return false;
  });
  const [highscore, setHighscore] = useState(() => {
    return 0;
  });

  const { height, width } = useWindowDimensions();

  const shuffleRandList = () => {
    //Makes an array filled from 0 to pagesToGet * 25
    let tempArr = Array.from(Array(pagesToGet * 25).keys());
    setRandList(shuffle(tempArr));
    setLoading(false);
  };
  useEffect(() => {
    //Resets game
    if (resetGame) {
      shuffleRandList();
      setScore(0);
      setChampIndex(0);
      setGameover(false);
      setResetGame(false);
    }
  }, [resetGame]);

  //Fill up pool with anime
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&page=${page}`);
        const data = await response.json();
        setPool((prevPool) => prevPool.concat(data.data));
        //Recursively calls again to get more pages
        if (page < pagesToGet) setPage((prevPage) => prevPage + 1);
        else shuffleRandList();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [page]);

  //Gets global high score
  useEffect(() => {
    const highscoreData = localStorage.getItem('highscore');
    if (highscoreData) {
      const parsedHighscore = JSON.parse(highscoreData);
      setHighscore(parsedHighscore.score);
    }
  }, []);

  // every time the player advances or loses, run this
  useEffect(() => {
    // console.log(pool);
  }, [score, loading]);

  useEffect(() => {
    if (!loading) {
      setChamp((prevChamp) => {
        return {
          ...pool[randList[champIndex]],
          reveal: true,
          higher: prevChamp.higher,
        };
      });
      setChallenger(pool[randList[score + 1]]);
      console.log(champIndex);
    }
  }, [champIndex, score, loading, randList]);

  //every game over
  useEffect(() => {
    const uploadNewHighScore = async () => {
      const currentHighscoreData = localStorage.getItem('highscore');
      if (!currentHighscoreData || score > JSON.parse(currentHighscoreData).score) {
        localStorage.setItem('highscore', JSON.stringify({ score: score }));
        setHighscore(score);
      }
    };
    if (gameover) {
      uploadNewHighScore();
    }
  }, [gameover, score]);

  const onAnimeClick = (isChamp) => {
    if (!gameover) {
      var champHigher = champ.members > challenger.members;
      setChamp((prevChamp) => {
        return {
          ...prevChamp,
          reveal: true,
          higher: champHigher,
        };
      });
      setChallenger((prevChallenger) => {
        return {
          ...prevChallenger,
          higher: !champHigher,
        };
      });
      // Guess Correctly
      if (isChamp == champHigher) {
        setChampIndex((prevChamp) => prevChamp + 1);
        setScore((prevScore) => prevScore + 1);
      } else {
        setChallenger((prevChallenger) => {
          return {
            ...prevChallenger,
            reveal: true,
          };
        });
        setGameover(true);
      }
    }
  };

  var mobileThreshold = 800;

  const gameoverElem = (
    <div className={styles.gameoverElem} onClick={() => setResetGame(true)}>
      <div className={styles.gameoverLabel}>Game Over 🏁</div>
      <div className={styles.gameoverBtn}>Press to play again 🎲</div>
    </div>
  );

  return (
    <main>
      {loading ? (
        <div>Loading... 💤 💤 💤</div>
      ) : (
        <>
          <h1 className={styles.prompt}>
            Which Anime is more popular? (according to MyAnimeList)
          </h1>
          <div>{width <= mobileThreshold && gameover && gameoverElem}</div>
          <h2 className={styles.score}>
            Your High Score 🏆 : {highscore}
          </h2>
          <h2 className={styles.score}>
            Current Score 🎖️ : {score}
          </h2>
          <div className={styles.battlefield}>
            {
              <>
                <AnimeDiv
                  clickCallback={() => onAnimeClick(true)}
                  obj={champ}
                  gameover={gameover}
                />
                <div style={{ marginTop: "75px" }}>
                  {
                    //Desktop gameover button
                    width <= mobileThreshold ||
                      (gameover ? (
                        gameoverElem
                      ) : (
                        <div id={styles.orLabel}>{"OR"}</div>
                      ))
                  }
                </div>
                <AnimeDiv
                  clickCallback={() => onAnimeClick(false)}
                  obj={challenger}
                  gameover={gameover}
                />
              </>
            }
          </div>
        </>
      )}
    </main>
  );
}