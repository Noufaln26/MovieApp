import React, { memo } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ filterMovies }) => {
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
