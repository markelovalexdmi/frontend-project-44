import generateRandomNum from '../helpers/randomNumber.js';

export const rules = 'What number is missing in the progression?';

export const runProgress = () => {
  const maxRandomPlace = 10;

  let correctAnswer;
  let number1;
  let output;

  const gameData = [];
  const correctAnswerNum = 3;
  for (let i = 0; i < correctAnswerNum; i += 1) {
    number1 = generateRandomNum(1, 10);
    output = '';
    const number2 = generateRandomNum(1, 10);
    const randomPlace = generateRandomNum(1, maxRandomPlace);
    for (let j = 1; j <= maxRandomPlace; j += 1) {
      if (j === randomPlace) {
        output = `${output} ..`;
        correctAnswer = number1;
        number1 += number2;
      } else {
        output = `${output} ${number1.toString()}`;
        number1 += number2;
      }
    }
    gameData.push([output.trim(), correctAnswer]);
  }
  console.log(gameData);
  return gameData;
};
