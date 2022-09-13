import classNames from "classnames/bind";
import styles from "./MoviePages.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../Store/Action";

import AOS from "aos";
import "aos/dist/aos.css";

const cx = classNames.bind(styles);
function MoviePages(props) {
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
  const { movies, idSection } = props;

  //--------------------------------------------------------------------------------
  return (
    <div className={cx("movie-container")} id={idSection}>

      <div className={cx("grid")}>
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

export default MoviePages;
