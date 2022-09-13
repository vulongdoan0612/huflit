import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import {
  getActionMovies,
  getComedyMovies,
  getDocumentariesMovies,
  getHorrorMovies,
  getNetflixOriginals,
  getRomanceMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../Store/Action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Icon.module.scss";
import { animateScroll as scroll } from "react-scroll";
import useScrollY from "../Hooks/useScrollY";
import ListMovie from "./ListMovie";
const ScrollToTop = () => {
  scroll.scrollToTop();
};
const cx = classNames.bind(styles);

function ContentList(props) {    
  const [scrollY] = useScrollY();
    const dispatch = useDispatch();

  const {
    NetflixOriginals,
    TrendingMovies,
    TopRatedMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomancesMovies,
    DocumentariesMovies,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(getNetflixOriginals());
    dispatch(getTrendingMovies());
    dispatch(getTopRatedMovies());
    dispatch(getActionMovies());
    dispatch(getComedyMovies());
    dispatch(getHorrorMovies());
    dispatch(getRomanceMovies());
    dispatch(getDocumentariesMovies());
  }, [dispatch]);
    const GoToTop = `div`;
    return (
      <div>
        <ListMovie
          movies={NetflixOriginals}
          title="Netflix Originals"
          isNetflix={true}
          idSection="netflix"
        ></ListMovie>
        ;
        <ListMovie
          movies={TrendingMovies}
          title="TrendingMovies"
          isNetflix={true}
          idSection="trending"
        ></ListMovie>
        <ListMovie
          movies={TopRatedMovies}
          title="Top Rated Movies"
          isNetflix={true}
          idSection="toprated"
        ></ListMovie>
        <ListMovie
          movies={ActionMovies}
          title="Action Movies"
          isNetflix={true}
          idSection="action"
        ></ListMovie>
        <ListMovie
          movies={ComedyMovies}
          title="Comedy Movies"
          isNetflix={true}
          idSection="comedy"
        ></ListMovie>
        ;
        <ListMovie
          movies={HorrorMovies}
          title="HorrorMovies"
          isNetflix={true}
          idSection="horror"
        ></ListMovie>
        <ListMovie
          movies={RomancesMovies}
          title="Romances Movies"
          isNetflix={true}
          idSection="romances"
        ></ListMovie>
        <ListMovie
          movies={DocumentariesMovies}
          title="Documentaries Movies"
          isNetflix={true}
          idSection="documentaries"
        ></ListMovie>
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

export default ContentList;
