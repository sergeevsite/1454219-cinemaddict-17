import {render, remove} from '../framework/render';
import FilmsContentView from '../view/films-content-view';
import FilmsListView from '../view/films-list-view';
import FilmsListTitleView from '../view/films-list-title-view';
import FilmsContainerView from '../view/films-container-view';
import FilmCardView from '../view/film-card-view';
import ShowMoreButtonView from '../view/show-more-button-view';
import FilmDetailsView from '../view/film-details-view';
import ListEmptyView from '../view/list-empty-view';

const FILM_COUNT_PER_STEP = 5;

export default class FilmsPresenter {
  #container = null;
  #filmsModel = null;
  #filmsContent = new FilmsContentView();
  #filmsList = new FilmsListView();
  #filmsContainer = new FilmsContainerView();
  #showMoreButton = new ShowMoreButtonView();
  #listEmpty = new ListEmptyView();

  #filmsData = [];
  #renderedFilmCount = FILM_COUNT_PER_STEP;

  init = (container, filmsModel) => {
    this.#container = container;
    this.#filmsModel = filmsModel;
    this.#filmsData = [...this.#filmsModel.films];

    render(this.#filmsContent, this.#container);
    render(this.#filmsList, this.#filmsContent.element);
    render(new FilmsListTitleView(), this.#filmsList.element);
    render(this.#filmsContainer, this.#filmsList.element);

    if(this.#filmsData.length <= 0) {
      render(this.#listEmpty, this.#filmsList.element);
    } else {
      for (let i = 0; i < Math.min(this.#filmsData.length, this.#renderedFilmCount); i++) {
        this.#renderFilm(this.#filmsData[i]);
      }

      if(this.#filmsData.length > FILM_COUNT_PER_STEP) {
        render(this.#showMoreButton, this.#filmsList.element);

        this.#showMoreButton.setClickHandler(this.#LoadMoreButtonHandler);
      }
    }

  };

  #LoadMoreButtonHandler = () => {
    this.#filmsData
      .slice(this.#renderedFilmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP)
      .forEach((film) => this.#renderFilm(film));

    this.#renderedFilmCount += FILM_COUNT_PER_STEP;

    if(this.#renderedFilmCount >= this.#filmsData.length) {
      remove(this.#showMoreButton);
    }
  };

  #renderFilm = (film) => {
    const filmComponent = new FilmCardView(film);
    const filmDetailsComponent = new FilmDetailsView(film);

    const closingFilmDetails = () => {
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

    filmComponent.setShowDetailsClickHandler(() => {
      this.#filmsList.element.appendChild(filmDetailsComponent.element);
      document.body.classList.add('hide-overflow');
      document.addEventListener('keydown', keyDownClosingHandler);
    });

    filmDetailsComponent.setCloseDetailsClickHandler(clickClosingHandler);

    render(filmComponent, this.#filmsContainer.element);
  };
}

