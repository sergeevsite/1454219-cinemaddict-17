import AbstractView from '../framework/view/abstract-view';

const createFilmsTemplate = () => '<section class="films"></section>';

export default class FilmsContentView extends AbstractView {
  get template() {
    return createFilmsTemplate();
  }
}
