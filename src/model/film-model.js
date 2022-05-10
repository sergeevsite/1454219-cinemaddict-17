import {generateFilm} from '../mock/film';

export default class FilmModel {
  film = Array.from({length: 3}, generateFilm);

  getFilm = this.film;
}
