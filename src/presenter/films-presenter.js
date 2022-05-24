import {render} from '../render';
import FilmsContentView from '../view/films-content-view';
import FilmsListView from '../view/films-list-view';
import FilmsListTitleView from '../view/films-list-title-view';
import FilmsContainerView from '../view/films-container-view';
import FilmCardView from '../view/film-card-view';
import ShowMoreButtonView from '../view/show-more-button-view';

export default class FilmsPresenter {
  filmsContent = new FilmsContentView();
  filmsList = new FilmsListView();
  filmsContainer = new FilmsContainerView();

  init = (container, filmsModel) => {
    this.container = container;
    this.filmsModel = filmsModel;
    this.filmsData = [...this.filmsModel.getFilm()];

    render(this.filmsContent, this.container);
    render(this.filmsList, this.filmsContent.getElement());
    render(new FilmsListTitleView(), this.filmsList.getElement());
    render(this.filmsContainer, this.filmsList.getElement());

    for (let i = 0; i < this.filmsData.length; i++) {
      render(new FilmCardView(this.filmsData[i]), this.filmsContainer.getElement());
    }

    render(new ShowMoreButtonView(), this.filmsList.getElement());
  };
}
