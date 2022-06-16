import AbstractView from '../framework/view/abstract-view';
import {getCapitalFirstLetter} from '../utils/common';

const createMenuItemTemplate = (filters, isChecked) => {
  const {name, count} = filters;
  return (
    `<a href="#${name}" class="main-navigation__item ${isChecked ? 'main-navigation__item--active' : ''}">
      ${isChecked ? 'All movies' : `${getCapitalFirstLetter(name)} <span class="main-navigation__item-count">${count}</span>`}
    </a>`
  );
};

const createMenuTemplate = (filters) => {
  const filtersItemsTemplate = filters
    .map((filter, index) => createMenuItemTemplate(filter, index === 0))
    .join(' ');

  return `<nav class="main-navigation">
      ${filtersItemsTemplate}
  </nav>`;
};

export default class MenuView extends AbstractView {
  #filters = null;

  constructor(filters) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createMenuTemplate(this.#filters);
  }
}
