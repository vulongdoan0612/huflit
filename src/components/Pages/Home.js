import Contents from "../Content/Contents";
import Intro from "../Intro/Intro";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import {useSelector} from 'react-redux'
import { useEffect, useState } from "react";
import IntroduceAll from "../Introduce/IntroduceAll";
import Ads from "../Ads/Ads";
import Menu2 from "../Menu/Menu2";
import Menu from "../Menu/Menu";
import classNames from "classnames/bind";
import styles from './Home.module.scss'
import './Home.css'
// import { Notyf } from "notyf";
//  var notyf = new Notyf({
//    position: {
//      x: "right",
//      y: "top",
//    },
//  });
//  notyf.success("Xin chào ! Chúc bạn xem phim vui vẻ ^^.");
const cx =classNames.bind(styles)
function Home(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false)
    useEffect(() => {
        setIsShowMovieDetail(MovieDetail ? true : false)
    }, [MovieDetail]);
    return (
      <div>
        <Intro></Intro>
        {/* <Ads></Ads> */}
        {/* <Menu2 className="a" ></Menu2> */}

        <Contents></Contents>
        <MoviesDetail
          //khai báo redux, được lấy từ reducerRedux
          movie={MovieDetail}
          showModal={isShowMovieDetail}
        ></MoviesDetail>
        <IntroduceAll></IntroduceAll>
      </div>
    );
}

export default Home;