import MoviesRow from './MoviesRow'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { getActionMovies, getComedyMovies, getDocumentariesMovies, getHorrorMovies, getNetflixOriginals, getRomanceMovies, getTopRatedMovies, getTrendingMovies } from '../Store/Action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Icon.module.scss'
import { animateScroll as scroll } from 'react-scroll';
import useScrollY from '../Hooks/useScrollY'
import AddFavourite from '../AddFar/AddFavourite';
const ScrollToTop = () => {
  scroll.scrollToTop();
}
const cx = classNames.bind(styles)
function Contents(props) {
  const [scrollY]=useScrollY()
  const dispatch = useDispatch();
  
  const { NetflixOriginals,
  TrendingMovies,
  TopRatedMovies,
  ActionMovies,
  ComedyMovies,
  HorrorMovies,
  RomancesMovies,
  DocumentariesMovies,
  } = useSelector(state => state.infoMovies)
  
  useEffect(() => {
    dispatch(getNetflixOriginals());
    dispatch(getTrendingMovies());
    dispatch(getTopRatedMovies());
    dispatch(getActionMovies());  
    dispatch(getComedyMovies());
    dispatch(getHorrorMovies());
    dispatch(getRomanceMovies());
    dispatch(getDocumentariesMovies());
  }, [dispatch])
  console.log(NetflixOriginals);
  const GoToTop=`div`
    return (
      <div>
        <MoviesRow
          movies={NetflixOriginals}
          title="Netflix Originals"
          isNetflix={true}
          idSection="netflix"
        ></MoviesRow>
        <MoviesRow
          movies={TrendingMovies}
          title="Trending"
          idSection="trending"
        ></MoviesRow>
        <MoviesRow
          movies={TopRatedMovies}
          title="Top Rated Movies"
          idSection="toprated"
        ></MoviesRow>
        <MoviesRow
          movies={ActionMovies}
          title="Action Movies"
          idSection="action"
        ></MoviesRow>
        <MoviesRow
          movies={ComedyMovies}
          title="Comedy Movies"
          idSection="comedy"
        ></MoviesRow>
        <MoviesRow
          movies={HorrorMovies}
          title="Horror Movies"
          idSection="horror"
        ></MoviesRow>
        <MoviesRow
          movies={RomancesMovies}
          title="Romance Movies"
          idSection="romances"
        ></MoviesRow>
        <MoviesRow
          movies={DocumentariesMovies}
          title="Documentaries"
          idSection="documentaries"
        ></MoviesRow>
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

export default Contents;