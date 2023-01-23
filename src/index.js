import readlineSync from 'readline-sync';
import userName from '../bin/brain-games.js';

const runBrainGames = (rounds, description) => {
  console.log(description);

  // eslint-disable-next-line no-restricted-syntax
  for (const [question, correctAnswer] of rounds) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runBrainGames;
