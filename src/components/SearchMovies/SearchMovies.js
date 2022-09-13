import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./SearchMovies.module.scss";
import { useViewport } from "../Hooks/useViewport";
import { useDispatch,useSelector } from "react-redux";
import {  useLocation } from 'react-router-dom'
import { getSearchMovies, setMovieDetail } from "../Store/Action";
const cx = classNames.bind(styles);
const useQuery = () => new URLSearchParams(useLocation().search);


 function SearchMovies(props) {
  const [windowWidth] = useViewport();
  // cấu trúc truyền API cho search
   const dispatch = useDispatch();
   //useSelector là 1 function đế lấy 1 prop từ chỗ chứa api chung, cấu trúc nó như ở dưới
  const { SearchMovies } = useSelector(state => state.infoMovies);
  //cấu trúc sử dụng usequery và uselocation ( router dom) để get dữ liệu được nhập từ thẻ input
  const keywords = useQuery().get("keywords");
  // console.log(keywords)
  // sử dụng useeffect. nếu có keywords, và khi keywords thay đổi thì xuất getsearchmovies
  useEffect(() => {
    if (keywords) dispatch(getSearchMovies(keywords));
  }, [keywords, dispatch]);
  //console.log(SearchMovies) SearchMovies để xem list item các danh sách search line #19
  return (
    <div className={cx("searchAll")}>
      {SearchMovies && SearchMovies.length > 0 ? (
        <div
          className={cx("searchContent")}
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            },auto)`
          }}
        >
          {SearchMovies.map((movie, index) => {
            if (
              //Đường dẫn backdrop khác null thì cho ra item, = null thì cho ra notfound
              movie.backdrop_path !== null &&
              movie.media_type !== 'person'
            ) {
              const imgageURL = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  className={cx("movieItem")}
                  key={index}
                  onClick={() => dispatch(setMovieDetail(movie))}
                >
                  <img src={imgageURL} alt="{movie.title || movie.name}"></img>
                  <span className={cx("span")}>{movie.title || movie.name}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className={cx("notFound")}>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            aut!
          </h1>
        </div>
      )}
    </div>
  );
}

export default SearchMovies;
