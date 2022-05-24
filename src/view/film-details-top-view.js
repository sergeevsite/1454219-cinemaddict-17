import {createElement} from '../render';
import {transformFilmReleaseDateFull, transformFilmRuntime} from '../utils/utils';

const createFilmDetailsTopTemplate = (film) => {
  const { title, alternativeTitle, totalRating, ageRating, description, poster, runtime, release, genre, actors, director, writers } = film.filmInfo;
  const { watchlist, alreadyWatched, favorite } = film.userDetails;

  const date = release.date !== null
    ? transformFilmReleaseDateFull(release.date)
    : '-';

  const timeDuration = runtime !== null
    ? transformFilmRuntime(runtime)
    : '-';

  const setClassActiveControls = (status) => status ? 'film-details__control-button--active' : '';

  const setGenres = () => genre.map((text) => `<span className="film-details__genre">${text}</span>`).join(' ');

  return (
    `<div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${poster}" alt="">

          <p class="film-details__age">+${ageRating}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">${alternativeTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${totalRating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers.join(', ')}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors.join(', ')}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${date}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${timeDuration}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${release.releaseCountry}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">${setGenres()}</tr>
          </table>

          <p class="film-details__film-description">${description}</p>
        </div>
      </div>

      <section class="film-details__controls">
        <button type="button" class="film-details__control-button film-details__control-button--watchlist ${setClassActiveControls(watchlist)}" id="watchlist" name="watchlist">Add to watchlist</button>
        <button type="button" class="film-details__control-button film-details__control-button--watched ${setClassActiveControls(alreadyWatched)}" id="watched" name="watched">Already watched</button>
        <button type="button" class="film-details__control-button film-details__control-button--favorite ${setClassActiveControls(favorite)}" id="favorite" name="favorite">Add to favorites</button>
      </section>
    </div>`
  );
};

export default class FilmDetailsTopView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createFilmDetailsTopTemplate(this.film);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
