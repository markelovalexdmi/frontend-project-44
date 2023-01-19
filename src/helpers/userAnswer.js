import readlineSync from 'readline-sync';

const isAnswerCorrect = (correctAnswer, inputName) => {
  let userAnswer = readlineSync.question('Your answer: ');

  if (typeof correctAnswer === 'number') {
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

export default isAnswerCorrect;
