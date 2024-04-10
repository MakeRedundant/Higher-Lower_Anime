async function setData(newScore) {
  try {
    // Store high score in local storage
    localStorage.setItem('highscore', JSON.stringify({ score: newScore, time: new Date().toISOString() }));
  } catch (err) {
    console.log(err); // output to console
    throw new Error('Failed to set high score'); // Throw error to be caught later
  }
}

exports.handler = async function (event, context) {
  const data = JSON.parse(event.body);

  try {
    await setData(data.score);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "success" }),
    };
  } catch (err) {
    console.log(err); // output to console
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};

