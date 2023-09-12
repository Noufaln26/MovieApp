import { atom } from "recoil";

export const movieDataState = atom({
  key: "movieDataState",
  default: {
    movieList: [],
    totalCount: 0,
    fetchingCompleted: false,
    currentPage: 1,
    pagesReturned: 0,
    isLoading: false,
  },
});
