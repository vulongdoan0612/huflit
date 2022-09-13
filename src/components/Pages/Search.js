import MoviesDetail from "../MoviesDetail/MoviesDetail";
import SearchMovies from "../SearchMovies/SearchMovies";
import { useSelector } from 'react-redux'
import React from 'react'

function Search(props) {
    const { MovieDetail} = useSelector(state => state.infoMovies)
    return (
      <div>
        <SearchMovies></SearchMovies>
        <MoviesDetail
          showModal={MovieDetail ? true : false}
          movie={MovieDetail}
        ></MoviesDetail>
      </div>
    );
}

export default Search;