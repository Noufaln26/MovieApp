import { useEffect, useCallback } from "react";
import MovieCard from "./MovieCard";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useFetchData from "@/hooks/useFetchData";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { movieDataState } from "@/recoil/atom";
import { incrementPageSelector } from "@/recoil/selector";
const MovieList = ({ filterMovies }) => {
  console.count("Render MovieList");

  const data = useFetchData();

  const { totalCount, pagesReturned, currentPage,movieList} = useRecoilValue(movieDataState);
  // const updatePage = useSetRecoilState(incrementPageSelector);

  useEffect(() => {
    data();
  }, [currentPage]);

  // const getNextPage = useCallback(() => {
  //   if (pagesReturned <= totalCount) {
  //     updatePage();
  //   }
  // }, [pagesReturned]);

  // useInfiniteScroll(getNextPage);

  if (filterMovies.length === 0) {
    return null;
  }
  return (
    <>
      <div className="m-2">
        <div className="grid grid-cols-3 gap-3">
          {filterMovies.map((item, index) => (
            <MovieCard key={`${item.name}-${index}`} movie={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
