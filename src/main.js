import {render} from './render';
import ProfileRatingView from './view/profile-rating-view';
import MenuView from './view/menu-view';
import SortingView from './view/sorting-view';
import StatisticsView from './view/statistics-view';
import FilmsPresenter from './presenter/films-presenter';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterStatisticsElement = document.querySelector('.footer__statistics');
const filmsPresenter = new FilmsPresenter();

render(new ProfileRatingView(), siteHeaderElement);
render(new MenuView(), siteMainElement);
render(new SortingView(), siteMainElement);
render(new StatisticsView(), siteFooterStatisticsElement);

filmsPresenter.init(siteMainElement);
