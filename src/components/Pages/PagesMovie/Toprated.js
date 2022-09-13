import MoviesDetail from "../../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Top from "../../ListMovie/Top";

function Toprated(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);  return (
    <div>
      <Top></Top>
      <MoviesDetail
        movie={MovieDetail}
        showModal={isShowMovieDetail}
      ></MoviesDetail>
    </div>
  );
}

export default Toprated;
