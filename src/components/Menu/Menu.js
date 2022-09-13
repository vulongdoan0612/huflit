import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { useLocation,Link } from "react-router-dom";
import "./Menu.css";
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);
const Menu = (props) => {
  const { pathname } = useLocation();
  const headerNav = [
    {
      to: "netflix",
      name: "Netflix Originals",
      title: "Netflix Originals",
    },
    {
      to: "trending",
      name: "Trending",
      title: "Trending",
    },
    {
      to: "toprated",
      name: "Top rated",
      title: "Top Rated Movies",
    },
    {
      to: "action",
      name: "Action",
      title: "Action Movies",
    },
    { to: "comedy", name: "Comedy Movies", title: "Comedy Movies" },
    { to: "horror", name: "Horror Movies", title: "Horror Movies" },
    { to: "romances", name: "Romance Movies", title: "Romance Movies" },
    { to: "documentaries", name: "Document Movies", title: "Documentaries" },
  ];

  return (
    <div className={cx("icones")}>
      {/* <MenuItem name="Home"  to="netflix"></MenuItem>
      <MenuItem name="Trending"  to="trending"></MenuItem>
      <MenuItem name="Top rated"  to="toprated"></MenuItem>
      <MenuItem name="Action"  to="action"></MenuItem>
      <MenuItem name="Comedy Movies"  to="comedy"></MenuItem>
      <MenuItem name="Horror Movies"  to="horror"></MenuItem>
      <MenuItem name="Romance Movies"  to="romances"></MenuItem>
      <MenuItem
        name="Document Movies"
        
        to="documentaries"
      ></MenuItem> */}
      {/* <Link to={`/movie/${title}/`} className={cx("headingg")}></Link> */}
      {headerNav.map((e, i) => (
        <Link
          className={cx("menu")}
          to={`/movie/${e.title}/` }
          key={i}
        >
          <div className={cx("flex")}>
            <p className={`title`}>{e.name}</p>
            <span className={`span`}></span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
