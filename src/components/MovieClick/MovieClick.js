import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieClickByName } from "../Store/Action";

function MovieClick(props) {
    const slug = useParams()
  const dispatch = useDispatch()
  const movie = useSelector((state) => state.movieName.movie);
  console.log(slug.movieName)
    // useEffect(() => {
    //   dispatch(getMovieClickByName(slug.movie));
    // }, [slug.movie, dispatch]);
    return (
      <div>
        {movie && (
          <div>
            <div>
              <h1>{movie.name}</h1>
            </div>
          </div>
        )}
      </div>
    );
}

export default MovieClick;