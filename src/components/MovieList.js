import { useEffect, useCallback } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ filterMovies }) => {
  if (filterMovies.length === 0) {
    return null;
  }
  return (
    <>
      <div className={`m-2 ${'bg-[url("/images/nav_bar.png")]'}`}>
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
