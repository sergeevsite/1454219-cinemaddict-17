import {createElement} from '../render';

const createFilmsListTemplate = () => '<section class="films-list"></section>';

export default class FilmsListView {
  getTemplate() {
    return createFilmsListTemplate();
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
