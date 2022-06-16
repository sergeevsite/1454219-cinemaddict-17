import {render} from './framework/render';
import FilmsModel from './model/films-model';
import FilmsPresenter from './presenter/films-presenter';
import ProfileRatingView from './view/profile-rating-view';
import MenuView from './view/menu-view';
import SortingView from './view/sorting-view';
import StatisticsView from './view/statistics-view';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');

const filmsModel = new FilmsModel();
const filmsPresenter = new FilmsPresenter();

render(new ProfileRatingView(), siteHeaderElement);
render(new MenuView(), siteMainElement);
render(new SortingView(), siteMainElement);
render(new StatisticsView(), siteFooterStatisticsElement);

filmsPresenter.init(siteMainElement, filmsModel);
