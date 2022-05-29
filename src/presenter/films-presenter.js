import {render} from '../render';
import FilmsContentView from '../view/films-content-view';
import FilmsListView from '../view/films-list-view';
import FilmsListTitleView from '../view/films-list-title-view';
import FilmsContainerView from '../view/films-container-view';
import FilmCardView from '../view/film-card-view';
import ShowMoreButtonView from '../view/show-more-button-view';
import FilmDetailsView from '../view/film-details-view';

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
      this.#renderFilm(this.#filmsData[i]);
    }

    render(new ShowMoreButtonView(), this.#filmsList.element);
  };

  #renderFilm = (film) => {
    const filmComponent = new FilmCardView(film);
    const filmDetailsComponent = new FilmDetailsView(film);

    const closingFilmDetails = (event) => {
      event.preventDefault();
      this.#filmsList.element.removeChild(filmDetailsComponent.element);
      document.body.classList.remove('hide-overflow');
      document.removeEventListener('keydown', keyDownClosingHandler);
    };

    const clickClosingHandler = closingFilmDetails;

    function keyDownClosingHandler(event) {
      if(event.key === 'Escape'){
        closingFilmDetails(event);
      }
    }

    filmComponent.link.addEventListener('click', (event) => {
      event.preventDefault();
      this.#filmsList.element.appendChild(filmDetailsComponent.element);
      document.body.classList.add('hide-overflow');
      document.addEventListener('keydown', keyDownClosingHandler);
    });

    filmDetailsComponent.closeButton.addEventListener('click', clickClosingHandler);

    render(filmComponent, this.#filmsContainer.element);
  };
}

