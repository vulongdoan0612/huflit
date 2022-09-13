import classNames from "classnames/bind";
import styles from "./MoviesRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";
import { SmoothHorizontalScrolling } from "../../Utils/Index";
import { useViewport } from "../Hooks/useViewport";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../Store/Action";
  
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const cx = classNames.bind(styles);

function Content(props) {
  const {
    addMovieToWatchList
  }=useContext(GlobalContext)
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset:55500,
    });
  }, []);
  const dispatch = useDispatch();
  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  }
  //Khai báo dispatch, setmoviedetail khi nhấp vào là movie được truyền dữ liệu từ redux
  const [windowWidth] = useViewport();
  const { movies, title, idSection } = props;
  
  //Function để tạo Movies Slider
  const sliderRef = useRef();
  const movieRef = useRef();
  // Slide cho Btn right
  
  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  // Slide cho Btn left
  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  //Hàm để kéo/thả--------------------------------------------------------------------------------
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  useEffect(() => {
    if (isDrag) {
      if (dragDown < dragMove) {
        handleScrollLeft();
      }
      if (dragDown > dragMove) {
        handleScrollRight();
      }
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  // const { pathname } = useLocation();
  // const active = movies.findIndex((movie) => movie.key === pathname);
  // const handleRouter = () => {
  //   if (movies.key === active) {
  //     navigate(`/${title}`);
  //   }
  // }

  //--------------------------------------------------------------------------------
  return (
    <div className={cx("movie-container")} id={idSection}>
      <div className={cx("flex")}>
        <span className={cx("span")}></span>
        <Link to={`/movie/${title}/`} className={cx("headingg")}>
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={cx("heading")}
          >
            {title}
          </h1>
        </Link>
        <div className={cx("flexbtn")}>
          <div className={cx("left")}>
            <FontAwesomeIcon
              // Gọi hàm slide btn left
              onClick={handleScrollLeft}
              icon={faCircleLeft}
            ></FontAwesomeIcon>
          </div>
          <div className={cx("right")}>
            <FontAwesomeIcon
              // Gọi hàm slide btn right
              onClick={handleScrollRight}
              icon={faCircleRight}
            ></FontAwesomeIcon>
            {/* ----------------------------------------------------------------------------------------- */}
          </div>
        </div>
      </div>

      <div
        className={cx("movie-slider")}
        ref={sliderRef}
        //Thêm draggable để kéo/ thả
        draggable={true}
        // Thêm attribute để kéo slide
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length},
                      ${
                        windowWidth > 1200
                          ? "360px"
                          : windowWidth > 992
                          ? "300px"
                          : windowWidth > 768
                          ? "250px"
                          : "150px"
                      }
                      )`,
              }
            : {}
        }
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imageURL = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

              return (
                //Link tới movie Click B1
                <div
                  key={index}
                  className={cx("movie-item")}
                  ref={movieRef}
                  //Thêm draggable để kéo/ thả
                  draggable="false"
                >
                  {
                    // Thêm ref = movieRef //}
                    /* Thêm draggable để kéo slide */
                  }

                  <img
                    className={cx("movie-img")}
                    draggable="false"
                    src={imageURL}
                    alt=""
                    onClick={() => handleSetMovie(movie)}
                  />

                  <div className={cx("flex")}>
                    <div
                      onClick={() => handleSetMovie(movie)}
                      className={cx("movie-name")}
                    >
                      {movie.title || movie.name}
                    </div>
                    <button onClick={() => addMovieToWatchList(movie)}>Add</button>
                  </div>
                </div>
              );
            }
          })}
      </div>

      {/*-------------------------------------------------------------------------------- */}
    </div>
  );
}

export default Content;
