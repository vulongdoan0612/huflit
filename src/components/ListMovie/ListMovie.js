import classNames from "classnames/bind";
import styles from "./ListMovie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect} from "react";
import { useViewport } from "../Hooks/useViewport";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../Store/Action";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function ListMovie(props) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 55500,
    });
  }, []);
  const dispatch = useDispatch();
  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };
  //Khai báo dispatch, setmoviedetail khi nhấp vào là movie được truyền dữ liệu từ redux
  const { movies, title, idSection } = props;
  
  //--------------------------------------------------------------------------------
  return (
    <div className={cx("movie-container")} id={idSection}>
      <div className={cx("flex")}>
        <span className={cx("span")}></span>
        <Link to={`/movie/${title}/`}>
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
            ></FontAwesomeIcon>
          </div>
          <div className={cx("right")}>
            <FontAwesomeIcon
              // Gọi hàm slide btn right
            ></FontAwesomeIcon>
            {/* ----------------------------------------------------------------------------------------- */}
          </div>
        </div>
      </div>

  
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imageURL = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

              return (
                //Link tới movie Click B1
                <Link to={`/movie/${movie.title || movie.name}/`}>
                  <div
                    key={index}
                    className={cx("movie-item")}
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
                      <p className={cx("movie-content")}>
                        <p className={cx("detail")}>
                          <button className={cx("btnDetail")}>Detail</button>
                        </p>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}

      {/*-------------------------------------------------------------------------------- */}
    </div>
  );
}

export default ListMovie;
