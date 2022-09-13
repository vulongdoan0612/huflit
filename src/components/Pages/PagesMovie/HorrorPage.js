import MoviesDetail from "../../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Horror from "../../ListMovie/Horror";

function HorrorPage(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);  return (
    <div>
      <Horror></Horror>
      <MoviesDetail
        movie={MovieDetail}
        showModal={isShowMovieDetail}
      ></MoviesDetail>
    </div>
  );
}

export default HorrorPage;
