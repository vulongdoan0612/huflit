import MoviesDetail from "../../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Trending from "../../ListMovie/Trending";

function TrendingList(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);  return (
    <div>
      <Trending></Trending>
      <MoviesDetail
        movie={MovieDetail}
        showModal={isShowMovieDetail}
      ></MoviesDetail>
    </div>
  );
}

export default TrendingList;
