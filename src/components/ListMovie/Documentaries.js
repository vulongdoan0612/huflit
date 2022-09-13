import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import {
  getDocumentariesMovies,
  
} from "../Store/Action";
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

function Documentaries(props) {
  const [scrollY] = useScrollY();
  const dispatch = useDispatch();

  const { DocumentariesMovies } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(getDocumentariesMovies());
  }, [dispatch]);
  const GoToTop = `div`;
  return (
    <div>
      <MoviePages
        movies={DocumentariesMovies}
        title="Documentaries Movies"
        isNetflix={true}
        idSection="documentaries"
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

export default Documentaries;
