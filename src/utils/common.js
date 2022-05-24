const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomNumber = (min = 0, max = 1) => {
  const randomNumber = min + Math.random() * (max - min);
  return randomNumber;
};

const getRandomArrayValue = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
};

export {getRandomInteger, getRandomNumber, getRandomArrayValue};
