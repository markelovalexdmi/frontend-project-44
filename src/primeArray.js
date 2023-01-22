const generatePrimeArray = (maxNumber) => {
  const primeArray = [];
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
      primeArray.push(y);
    }
  }
  return primeArray;
};
export default generatePrimeArray;
