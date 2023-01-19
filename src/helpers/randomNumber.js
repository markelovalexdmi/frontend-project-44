const generateRandomNum = (min, max) => {
  const x = Math.round(Math.random() * (max - min) + min);
  return x;
};
export default generateRandomNum;
