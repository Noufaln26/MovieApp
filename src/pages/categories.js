import { useEffect, useState, useCallback } from "react";
import MovieList from "@/components/MovieList";
import NavBar from "@/components/NavBar";
import { updatedMovieDetails } from "@/recoil/selector";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { movieDataState } from "@/recoil/atom";
import useFuzzySearch from "@/hooks/useFuzzySearch";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [globalState, setGlobalState] = useRecoilState(movieDataState);

  const {
    movieList,
    totalCount,
    currentPage,
    pagesReturned,
    fetchingCompleted,
  } = globalState;

  const fetchData = async () => {
    try {
      const url = `/api/apiResponse${globalState.currentPage}.json`;
      const response = await fetch(url);
      if (response.status !== 200) {
        setGlobalState((prevState) => ({
          ...prevState,
          fetchingCompleted: true,
        }));
        return;
      }
      const apiResponse = await response.json();
      setGlobalState((prevState) => ({
        ...prevState,
        movieList: prevState.movieList.concat(
          apiResponse.page["content-items"].content
        ),
        totalCount: parseInt(apiResponse.page["total-content-items"]),
        pagesReturned:
          prevState.pagesReturned +
          parseInt(apiResponse.page["page-size-returned"]),
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const searchMovies = useFuzzySearch(movieList);
  const filterAppliedMovies = searchMovies(searchQuery);

  useEffect(() => {
    if (!fetchingCompleted && pagesReturned <= totalCount) {
      fetchData();
    }
  }, [currentPage]);

  const getNextPage = useCallback(() => {
    if (pagesReturned <= totalCount) {
      setGlobalState((prevState) => ({
        ...prevState,
        currentPage: prevState.currentPage + 1,
      }));
    }
  }, [pagesReturned]);

  useInfiniteScroll(getNextPage);

  return (
    <main>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MovieList filterMovies={filterAppliedMovies} />
    </main>
  );
};

export default Categories;
