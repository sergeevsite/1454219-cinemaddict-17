import { filter } from '../utils/filter.js';

export const generateFilter = (films) => Object.entries(filter).map(
  ([filterName, filterCards]) => ({
    name: filterName,
    count: filterCards(films).length,
  }),
);
