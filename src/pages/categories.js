import { useEffect, useCallback, useRef } from "react";
import MovieList from "@/components/MovieList";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import useFetchData from "@/hooks/useFetchData";
import { incrementPageSelector, movieListSelector } from "@/recoil/selector";
// import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import useFuzzySearch from "@/hooks/useFuzzySearch";
import { movieDataState } from "@/recoil/atom";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {movieList} = useRecoilValue(movieDataState);

  console.count("Re-rendering Categories");

  const searchMovies = useFuzzySearch(movieList);
  const filteredMovies = searchMovies(searchQuery);

  return (
    <main>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MovieList filterMovies={[]} />
    </main>
  );
};

export default Categories;
