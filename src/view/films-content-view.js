import {createElement} from '../render';

const createFilmsTemplate = () => '<section class="films"></section>';

export default class FilmsContentView {
  getTemplate() {
    return createFilmsTemplate();
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
