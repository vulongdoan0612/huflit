import MoviesDetail from "../../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Comedy from "../../ListMovie/Comedy";

function ComedyPage(props) {
    const { MovieDetail } = useSelector((state) => state.infoMovies);
    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
    useEffect(() => {
      setIsShowMovieDetail(MovieDetail ? true : false);
    }, [MovieDetail]);
  return (
    <div>
      <Comedy></Comedy>
      <MoviesDetail
        movie={MovieDetail}
        showModal={isShowMovieDetail}
      ></MoviesDetail>
    </div>
  );
}

export default ComedyPage;
