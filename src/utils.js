import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
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

export { transformFilmReleaseDateYear, transformFilmReleaseDateFull, transformFilmRuntime };
