import MoviesDetail from "../../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import Action from "../../ListMovie/Action";

function ActionPage(props) {
    const { MovieDetail } = useSelector((state) => state.infoMovies);
    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
    useEffect(() => {
      setIsShowMovieDetail(MovieDetail ? true : false);
    }, [MovieDetail]);
    
  return (
    <div>
      
      <Action></Action>
      <MoviesDetail
        movie={MovieDetail}
        showModal={isShowMovieDetail}
      ></MoviesDetail>
    </div>
  );
}

export default ActionPage;
