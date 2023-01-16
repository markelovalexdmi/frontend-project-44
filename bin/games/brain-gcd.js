import readlineSync from 'readline-sync';

const gcd = (inputName) => {
  const minRandom = 1;
  const maxRandom = 60;
  const correctAnswerNum = 3;

  let randomNumber1;
  let randomNumber2;
  let counter;
  let userAnswer;

  console.log('Find the greatest common divisor of given numbers.');

  for (let j = 1; j <= correctAnswerNum; j += 1) {
    randomNumber1 = Math.round(
      Math.random() * (maxRandom - minRandom) + minRandom,
    );
    randomNumber2 = Math.round(
      Math.random() * (maxRandom - minRandom) + minRandom,
    );

    if (randomNumber1 === randomNumber2) {
      counter = randomNumber1;
    } else if (randomNumber1 < randomNumber2) {
      counter = randomNumber1 / 2;
    } else {
      counter = randomNumber1 / 2;
    }

    let correctAnswer = 1;
    let i = 2;

    while (i <= counter) {
      if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
        correctAnswer = i;
        i += 1;
      } else {
        i += 1;
      }
    }

    if (correctAnswer === 1) {
      j -= 1;
      continue;
    }

    console.log(`Numbers: ${randomNumber1} ${randomNumber2}`);
    userAnswer = readlineSync.question('Your answer: ');
    userAnswer = Number(userAnswer);
    if (correctAnswer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${inputName}!`);
      return;
    }
    if (correctAnswer === userAnswer && j !== correctAnswerNum) {
      console.log('Correct!');
    } else {
      console.log('Correct!');
      console.log(`Congratulations, ${inputName}!`);
      return;
    }
  }
};
export default gcd;
