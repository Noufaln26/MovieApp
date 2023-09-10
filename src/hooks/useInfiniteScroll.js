import { useBottomScrollListener } from "react-bottom-scroll-listener";

const useInfiniteScroll = (callback) => {
  return useBottomScrollListener(callback);
};

export default useInfiniteScroll;
