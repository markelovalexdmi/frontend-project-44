import randomNumber from './random-number.js';

const primeNumber = (maxNumber, primeOrNot) => {
  const arrayPrime = [];
  const arrayNotPrime = [1];
  let y = 1;
  let counter;
  while (y < maxNumber) {
    y += 1;
    counter = 0;
    for (let j = 1; j <= y / 2; j += 1) {
      if (y % j === 0) {
        counter += 1;
      }
    }
    if (counter === 1) {
      arrayPrime.push(y);
    } else {
      arrayNotPrime.push(y);
    }
  }
  if (primeOrNot === 1) {
    return arrayPrime[randomNumber(0, arrayPrime.length - 1)];
  }
  return arrayNotPrime[randomNumber(0, arrayNotPrime.length - 1)];
};
export default primeNumber;
