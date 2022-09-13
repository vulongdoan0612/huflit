import * as Types from '../Types'
// Khai báo thông tin từng thể loại redux
const reducerMoviesInitialState = {
  NetflixOriginals: null,
  TrendingMovies: null,
  TopRatedMovies: null,
  ActionMovies: null,
  ComedyMovies: null,
  HorrorMovies: null,
  RomancesMovies: null,
  DocumentariesMovies: null,
  MovieDetail: null,
  SearchMovies: null,

};
// //cấu trúc function redux là const = ()=>{
// // switch ({
// //   case tên trường hợp{
// //   action nó là gì
// //     }
// //   })
//           return( ...state, ten: payload)
// // }
const reducerMovies = (state = reducerMoviesInitialState, action) => {
    const {type,payload}=action
    switch (type) {
      case Types.GET_NETFLIX_ORIGINALS:
        return { ...state, NetflixOriginals: payload };
      case Types.GET_TRENDING_MOVIES:
        return { ...state, TrendingMovies: payload };
      case Types.GET_TOP_RATED_MOVIES:
        return { ...state, TopRatedMovies: payload };
      case Types.GET_ACTION_MOVIES:
        return { ...state, ActionMovies: payload };
      case Types.GET_COMEDY_MOVIES:
        return { ...state, ComedyMovies: payload };
      case Types.GET_HORROR_MOVIES:
        return { ...state, HorrorMovies: payload };
      case Types.GET_ROMANCE_MOVIES:
        return { ...state, RomancesMovies: payload };
      case Types.GET_DOCUMENTARIES_MOVIES:
        return { ...state, DocumentariesMovies: payload };
      case Types.SET_MOVIE_DETAIL:
        return { ...state, MovieDetail: payload };
      case Types.GET_SEARCH_MOVIES:
        return { ...state, SearchMovies: payload };

      default:
        return state;
    }
}
export default reducerMovies;