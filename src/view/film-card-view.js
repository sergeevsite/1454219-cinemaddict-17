import {transformFilmReleaseDateYear, transformFilmRuntime} from '../utils/utils';
import AbstractView from '../framework/view/abstract-view';

const createFilmCardTemplate = (film) => {
  const { comments } = film;
  const { title, totalRating, description, poster, runtime, release, genre } = film.filmInfo;
  const { watchlist, alreadyWatched, favorite } = film.userDetails;

  const dateYear = release.date !== null
    ? transformFilmReleaseDateYear(release.date)
    : '-';

  const timeDuration = runtime !== null
    ? transformFilmRuntime(runtime)
    : '-';

  const setClassActiveControls = (status) => status ? 'film-card__controls-item--active' : '';

  return (
    `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${totalRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${dateYear}</span>
        <span class="film-card__duration">${timeDuration}</span>
        <span class="film-card__genre">${genre[0]}</span>
      </p>
      <img src="${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <span class="film-card__comments">${comments.length} comments</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${setClassActiveControls(watchlist)}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${setClassActiveControls(alreadyWatched)}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${setClassActiveControls(favorite)}" type="button">Mark as favorite</button>
    </div>
  </article>`
  );
};

export default class FilmCardView extends AbstractView {
  #film = null;

  constructor(film) {
    super();
    this.#film = film;
  }

  get template() {
    return createFilmCardTemplate(this.#film);
  }

  setShowDetailsClickHandler = (callback) => {
    this._callback.showDetailsClick = callback;
    this.element.querySelector('.film-card__link').addEventListener('click', this.#showDetailsClickHandler);
  };

  #showDetailsClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.showDetailsClick();
  };
}
