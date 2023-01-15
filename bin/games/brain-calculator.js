import readlineSync from 'readline-sync';

const calculator = (inputName) => {
  const minRandom = 1;
  const maxRandom = 100;
  const maxRandomSign = 3;
  const maxRandomMultipl = 10;
  const correctAnswerNum = 3;

  let correctAnswer;
  let randomNumber1;
  let randomNumber2;
  let randomSign;
  let userAnswer;
  let supportNumber;

  console.log('What is the result of the expression?');
  for (let i = 1; i <= correctAnswerNum; i += 1) {
    randomSign = Math.round(
      Math.random() * (maxRandomSign - minRandom) + minRandom,
    );
    randomNumber1 = Math.round(
      Math.random() * (maxRandom - minRandom) + minRandom,
    );
    randomNumber2 = Math.round(
      Math.random() * (maxRandom - minRandom) + minRandom,
    );
    switch (randomSign) {
      case 1:
        console.log(`Expression: ${randomNumber1} + ${randomNumber2}`);
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case 2:
        if (randomNumber1 < randomNumber2) {
          supportNumber = randomNumber1;
          randomNumber1 = randomNumber2;
          randomNumber2 = supportNumber;
        }
        console.log(`Expression: ${randomNumber1} - ${randomNumber2}`);
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      default:
        randomNumber2 = Math.round(
          Math.random() * (maxRandomMultipl - minRandom) + minRandom,
        );
        console.log(`Expression: ${randomNumber1} * ${randomNumber2}`);
        correctAnswer = randomNumber1 * randomNumber2;
        break;
    }
    userAnswer = readlineSync.question('Your answer: ');
    userAnswer = Number(userAnswer);
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
export default calculator;
