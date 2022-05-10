import {generateFilm} from '../mock/film';

export default class FilmsModel {
  film = Array.from({length: 5}, generateFilm);

  getFilm = () => this.film;
}
