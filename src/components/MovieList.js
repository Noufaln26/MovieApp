import React, { memo } from "react";
import MovieCard from "./MovieCard";
import { useRecoilValue } from "recoil";
import { movieDataState } from "@/recoil/atom";

const MovieList = ({ filterMovies }) => {
  const {isLoading} = useRecoilValue(movieDataState);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-center text-4xl">Loading...</h1>
        </div>
    );
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

export default memo(MovieList);
