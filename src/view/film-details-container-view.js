import {createElement} from '../render';

const createFilmDetailsContainerTemplate = () =>
  '<section class="film-details"></section>';

export default class FilmDetailsContainerView {
  #element = null;
  get template() {
    return createFilmDetailsContainerTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
