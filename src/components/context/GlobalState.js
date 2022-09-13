import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : []
 
};

// create context
export const GlobalContext = createContext(initialState);


// provider components
export const GlobalProvider = (props) => {
    
    
    const [state, dispatch] = useReducer(AppReducer, initialState);

      const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
      };

    return (<GlobalContext.Provider value={{ watchlist: state.watchlist,watched:state.watched,addMovieToWatchlist }}>{props.children}</GlobalContext.Provider>)
}
