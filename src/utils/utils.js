import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {getRandomInteger} from './common';
dayjs.extend(duration);

const transformFilmReleaseDateYear = (releaseDate) => dayjs(releaseDate).format('YYYY');

const transformFilmReleaseDateFull = (releaseDate) => dayjs(releaseDate).format('D MMMM YYYY');

const transformFilmRuntime = (runtime) => {
  const minutesDayjs = dayjs.duration(runtime, 'minutes');
  if(runtime >= 60) {
    return minutesDayjs.format('H[h] mm[m]');
  } else {
    return minutesDayjs.format('mm[m]');
  }
};

const generateRandomArray = (array, min = 1, max = 5) => {
  const result = new Set();
  for(let i=0; i < getRandomInteger(min, max); i++) {
    result.add(array[getRandomInteger(1, array.length - 1)]);
  }
  return [...result];
};
export { transformFilmReleaseDateYear, transformFilmReleaseDateFull, transformFilmRuntime, generateRandomArray };
