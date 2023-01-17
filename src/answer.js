const answer = (correctAnswer, userAnswer, inputName) => {
  if (typeof(correctAnswer) === 'number') {
    userAnswer = Number(userAnswer);
  }
  if (correctAnswer !== userAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${inputName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};
export default answer;
