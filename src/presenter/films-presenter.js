import {render} from '../render';
import FilmsContentView from '../view/films-content-view';
import FilmsListView from '../view/films-list-view';
import FilmsListTitleView from '../view/films-list-title-view';
import FilmsContainerView from '../view/films-container-view';
import FilmCardView from '../view/film-card-view';
import ShowMoreButtonView from '../view/show-more-button-view';

export default class FilmsPresenter {
  #filmsContent = new FilmsContentView();
  #filmsList = new FilmsListView();
  #filmsContainer = new FilmsContainerView();
  #container = null;
  #filmsModel = null;
  #filmsData = [];

  init = (container, filmsModel) => {
    this.#container = container;
    this.#filmsModel = filmsModel;
    this.#filmsData = [...this.#filmsModel.films];

    render(this.#filmsContent, this.#container);
    render(this.#filmsList, this.#filmsContent.element);
    render(new FilmsListTitleView(), this.#filmsList.element);
    render(this.#filmsContainer, this.#filmsList.element);

    for (let i = 0; i < this.#filmsData.length; i++) {
      render(new FilmCardView(this.#filmsData[i]), this.#filmsContainer.element);
    }

    render(new ShowMoreButtonView(), this.#filmsList.element);
  };
}
