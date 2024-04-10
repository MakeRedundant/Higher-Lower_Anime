
async function getData() {
    try {
      // Retrieve high score from local storage
      const highScoreData = localStorage.getItem('highscore');
      const highScore = highScoreData ? JSON.parse(highScoreData) : { score: 0 }; // Default score to 0 if not found
      return [highScore];
    } catch (err) {
      console.log(err); // output to console
      throw new Error('Failed to get high score'); // Throw error to be caught later
    }
  }
  
  exports.handler = async function (event, context) {
    try {
      const data = await getData();
      return {
        statusCode: 200,
        body: JSON.stringify({ score: data[0].score }),
      };
    } catch (err) {
      console.log(err); // output to console
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: err.message }),
      };
    }
  };
  