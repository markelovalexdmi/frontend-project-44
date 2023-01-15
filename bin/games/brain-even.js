import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenOrNot = (inputName) => {
  const minRandom = 1;
  const maxRandom = 20;
  const correctAnswerNum = 3;

  let correctAnswer;
  let randomNumber;
  let userAnswer;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= correctAnswerNum; i += 1) {
    randomNumber = Math.round(
      Math.random() * (maxRandom - minRandom) + minRandom,
    );
    console.log(`Number: ${randomNumber}`);
    userAnswer = readlineSync.question('Your answer: ');
    correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (correctAnswer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${inputName}!`);
      return;
    } if (correctAnswer === userAnswer && i !== correctAnswerNum) {
      console.log('Correct!');
    } else {
      console.log('Correct!');
      console.log(`Congratulations, ${inputName}!`);
      return;
    }
  }
};
export default evenOrNot;
