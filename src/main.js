import {render} from './render';
import ProfileRatingView from './view/profile-rating-view';
import MenuView from './view/menu-view';
import SortingView from './view/sorting-view';
import StatisticsView from './view/statistics-view';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterStatisticsElement = document.querySelector('.footer__statistics');

render(new ProfileRatingView(), siteHeaderElement);
render(new MenuView(), siteMainElement);
render(new SortingView(), siteMainElement);
render(new StatisticsView(), siteFooterStatisticsElement);
