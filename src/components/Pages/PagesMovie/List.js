import MoviesDetail from "../../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Netflix from "../../ListMovie/Netflix";

function List(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);  return (
    <div>
      <Netflix></Netflix>
      <MoviesDetail
        movie={MovieDetail}
        showModal={isShowMovieDetail}
      ></MoviesDetail>
    </div>
  );
}

export default List;
