import MoviesDetail from "../../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Romance from "../../ListMovie/Romance";

function RomancePage(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);  return (
    <div>
      <Romance></Romance>
      <MoviesDetail
        movie={MovieDetail}
        showModal={isShowMovieDetail}
      ></MoviesDetail>
    </div>
  );
}

export default RomancePage;
