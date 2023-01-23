import generateRandomNumber from '../helpers/randomNumber.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let j = 2; j < number / 2; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const runPrime = () => {
  const rounds = [];
  const correctAnswerNum = 3;
  for (let i = 0; i < correctAnswerNum; i += 1) {
    const number = generateRandomNumber(1, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    rounds.push([number, correctAnswer]);
  }
  return rounds;
};
