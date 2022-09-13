import styles from "./MovieDetail.module.scss";
import classNames from "classnames/bind";
import "./MovieBackdrop.css";
import { setMovieDetail } from "../Store/Action";
import { useDispatch } from "react-redux";
import moment from "moment";
const cx = classNames.bind(styles);
// const showModal = false;

function MoviesDetail(props) {
  // day props ra ngoài, cụ thể như là Search.js
  const { movie, showModal } = props;
  //khai báo hàm dispatch là đương nhiên, setMovieDetail = null để ẩn đi
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setMovieDetail(null));
  };
  return (
    <div>
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
        //onClick nút ẩn

        onClick={handleCloseModal}
      ></div>
      <div
        className={`modal ${showModal ? "showModal" : "hideModal"}`}
        style={
          movie
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path
                })`,
              }
            : {}
        }
      >
        <div className={cx("container")}>
          <div className={cx("movie-info")}>
            <h1 className={cx("movie-title")}>
              {movie && (movie.title || movie.name)}
            </h1>
            <p className={cx("movie-content")}>
              <p className={cx("rating")}>
                Rating: {movie && movie.vote_average * 10}%
              </p>
              <p className={cx("popularity")}>
                Popularity:{movie && movie.popularity}
              </p>
            </p>

            <p className={cx("relasedate")}>
              Release Date:
              {(movie && moment(movie.release_date).format("DD/MM/YYYY")) ||
                (movie && moment(movie.first_air_date).format("DD/MM/YYYY"))}
            </p>
            <p className={cx("runtime")}>
              Runtime:{movie && (movie.runtime || movie.episode_run_time)}
            </p>
            <p className={cx("overview")}>{movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetail;
