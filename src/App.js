import './App.css';
import {useSelector} from 'react-redux'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import List from "./components/Pages/PagesMovie/List";
//Thêm này để sử dụng dc chuyển đổi các page (router-dom)
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Search from './components/Pages/Search';
import { useEffect } from 'react';
import MovieClick from './components/MovieClick/MovieClick';
import ListMovie from './components/ListMovie/ListMovie';
import ContentList from './components/ListMovie/ContentList';
import TrendingList from "./components/Pages/PagesMovie/TrendingList";
import Toprated from './components/Pages/PagesMovie/Toprated';
import ActionPage from './components/Pages/PagesMovie/ActionPage';
import Comedy from './components/ListMovie/Comedy';
import Horror from './components/ListMovie/Horror';
import Romance from './components/ListMovie/Romance';
import Documentaries from './components/ListMovie/Documentaries';
import { Notyf } from 'notyf';
import LeftBtn from './components/LeftBtn/LeftBtn';
import{ GlobalProvider} from "../src/components/context/GlobalState"


//hiệu ứng animation

function App(props) {



  const { MovieDetail } = useSelector((state) => state.infoMovies);
  //khai báo redux, được lấy từ reducerRedux
  return (
    //Khai báo BrowserRouter, Routes, Route như sau để chuyển đổi link
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          
          <Navbar></Navbar>
          <LeftBtn></LeftBtn>
          <Routes>
            {/* trang home không cần phải thêm path */}
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route
              path="/movieAll/:movieType"
              element={<ContentList></ContentList>}
            ></Route>
            {/* Link tới Movie Click B2 */}
            <Route
              path="/movie/Netflix%20Originals/"
              element={<List></List>}
            ></Route>
            <Route
              path="/movie/Trending/"
              element={<TrendingList></TrendingList>}
            ></Route>
            <Route
              path="/movie/Top%20Rated%20Movies/"
              element={<Toprated></Toprated>}
            ></Route>
            <Route
              path="/movie/Action%20Movies/"
              element={<ActionPage></ActionPage>}
            ></Route>
            <Route
              path="/movie/Comedy%20Movies/"
              element={<Comedy></Comedy>}
            ></Route>
            <Route
              path="/movie/Horror%20Movies/"
              element={<Horror></Horror>}
            ></Route>
            <Route
              path="/movie/Romance%20Movies/"
              element={<Romance></Romance>}
            ></Route>
            <Route
              path="/movie/Documentaries/"
              element={<Documentaries></Documentaries>}
            ></Route>
            <Route path="/search" element={<Search></Search>}></Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
      {/* <Home></Home> */}
      {/* <SearchMovies></SearchMovies> */}
      {/* <Intro></Intro>
      <Contents></Contents>
      <Menu></Menu>
      <MoviesDetail
        //khai báo redux, được lấy từ reducerRedux
        movied={MovieDetail}
        showModal={MovieDetail ? true : false}
      ></MoviesDetail> */}
    </div>
  );
}

export default App;
