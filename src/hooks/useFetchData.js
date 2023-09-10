import { useSetRecoilState, useRecoilValue } from "recoil";
import { movieDataState } from "@/recoil/atom";
import { updateMovieData, incrementPageSelector } from "@/recoil/selector";

const useFetchData = () => {
  let responseData = {};
  const updateData = useSetRecoilState(updateMovieData)

  const fetchData = async () => {
    try {
      const url = `/api/apiResponse1.json`;
      const response = await fetch(url);
      responseData = await response.json();

      updateData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return fetchData;
};

export default useFetchData;
