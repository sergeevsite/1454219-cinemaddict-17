import {getRandomNumber, getRandomArrayValue, getRandomInteger} from '../utils/common';
import {generateRandomArray} from '../utils/utils';

const titles = [
  'Made For Each Other',
  'Popeye Meets Sinbad',
  'Santa Claus Conquers The Martians',
  'Sagebrush Trail',
  'The Dance Of Life'
];
const alternativeTitles = [
  'Made For Each Other',
  'Popeye Meets Sinbad',
  'Santa Claus Conquers The Martians',
  'Sagebrush Trail',
  'The Dance Of Life'
];
const posters = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg'
];
const description = [
  'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
];
const names = [
  'Takeshi Kitano',
  'Morgan Freeman',
  'Dwayne Douglas Johnson',
  'Leonardo Wilhelm DiCaprio',
  'William Bradley Pitt'
];

const genres = [
  'Comedy',
  'Film-Noir',
  'Mystery',
  'Drama'
];

const countrys = [
  'Finland',
  'USA',
  'China',
  'Russia'
];

const generateTotalRating = () => getRandomNumber(0, 10).toFixed(1);
const generateRuntime = () => getRandomInteger(0, 90);

export const generateFilm = () => ({
  id: '0',
  comments: [],
  filmInfo: {
    title: getRandomArrayValue(titles),
    alternativeTitle: getRandomArrayValue(alternativeTitles),
    totalRating: generateTotalRating(),
    poster: `images/posters/${getRandomArrayValue(posters)}`,
    ageRating: 0,
    director: getRandomArrayValue(names),
    writers: generateRandomArray(names),
    actors: generateRandomArray(names),
    release: {
      date: '2019-05-11T00:00:00.000Z',
      releaseCountry: getRandomArrayValue(countrys)
    },
    runtime: generateRuntime(),
    genre: generateRandomArray(genres, 1, 3),
    description: getRandomArrayValue(description)
  },
  userDetails: {
    watchlist: false,
    alreadyWatched: true,
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: false
  }
});
