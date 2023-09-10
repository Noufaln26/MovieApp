import { atom } from 'recoil';

export const movieDataState = atom({
  key: 'movieDataState',
  default: {
    movieList: [],
    totalCount: 0,
    fetching: false,
    currentPage: 1,
    pagesReturned: 0,
  }
});