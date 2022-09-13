import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import {  getTopRatedMovies } from "../Store/Action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Icon.module.scss";
import { animateScroll as scroll } from "react-scroll";
import useScrollY from "../Hooks/useScrollY";
import MoviePages from "./MoviePages";
const ScrollToTop = () => {
  scroll.scrollToTop();
};
const cx = classNames.bind(styles);

function Top(props) {
  const [scrollY] = useScrollY();
  const dispatch = useDispatch();

  const { TopRatedMovies } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);
  const GoToTop = `div`;
  return (
    <div>
      <MoviePages
        movies={TopRatedMovies}
        title="Top Rated Movies"
        isNetflix={true}
        idSection="toprated"
      ></MoviePages>
      <GoToTop
        className={cx("up-icon")}
        onClick={() => ScrollToTop()}
        scrollY
        style={{
          visibility: `${scrollY > 600 ? "visible" : "hidden"}`,
        }}
      >
        <FontAwesomeIcon icon={faUpLong}></FontAwesomeIcon>
      </GoToTop>
    </div>
  );
}

export default Top;
