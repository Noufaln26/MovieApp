import { selector } from "recoil";
const { movieDataState } = require("./atom");

export const updatedMovieDetails = selector({
  key: "updateMovieData",
  get: ({}) => {},
  set: ({ set, get }, apiResponse) => {
    if (!apiResponse || !apiResponse.page) {
      console.error("Invalid API response:", apiResponse);
      return;
    }
    const currentData = get(movieDataState);
    console.log("MovieData state");
    const newMovieList = currentData.movieList.concat(
      apiResponse.page["content-items"].content
    );
    const newTotalCount = parseInt(apiResponse.page["total-content-items"]);
    const newPagesReturned =
      currentData.pagesReturned +
      parseInt(apiResponse.page["page-size-returned"]);

    const updatedState = {
      ...currentData,
      movieList: newMovieList,
      totalCount: newTotalCount,
      pagesReturned: newPagesReturned,
    };

    set(movieDataState, updatedState);
  },
});

export const incrementPageSelector = selector({
  key: "incrementPage",
  get: ({ get }) => movieDataState.currentPage,
  set: ({ set }) => {
    set(movieDataState, (prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage + 1,
    }));
  },
});
