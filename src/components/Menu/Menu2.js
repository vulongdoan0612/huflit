import classNames from "classnames/bind";
import styles from "./Menu2.module.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import "./Menu.css";
import useScrollY from "../Hooks/useScrollY";
import { useViewport } from "../Hooks/useViewport";

const cx = classNames.bind(styles);
const Menu2 = (props) => {
  const { pathname } = useLocation();
const [scrollY] = useScrollY();
  const headerNav = [
    {
      to: "netflix",
      name: "Home",
    },
    {
      to: "trending",
      name: "Trending",
    },
    {
      to: "toprated",
      name: "Top rated",
    },
    {
      to: "action",
      name: "Action",
    },
    { to: "comedy", name: "Comedy Movies" },
    { to: "horror", name: "Horror Movies" },
    { to: "romances", name: "Romance Movies" },
    { to: "documentaries", name: "Document Movies" },
  ]; 

  const active = headerNav.findIndex((e) => e.to === pathname);
  return (
    <div>
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
        <div className={cx("wrap2")} style={scrollY > 150 ? { opacity: 1 } : { opacity: 0 }}>
          {headerNav.map((e, i) => (
            <Link
              // style={`${
              //   windowWidth > 1200
              //     ? scrollY > 50
              //       ? { display: "block" }
              //       : { display: "none" }
              //     : windowWidth > 992
              //     ? scrollY > 50
              //       ? { display: "block" }
              //       : { display: "none" }
              //     : windowWidth > 768
              //     ? scrollY > 50
              //       ? { display: "block" }
              //       : { display: "none" }
              //     : scrollY > 50
              //     ? { display: "block" }
              //     : { display: "none" }
              // }`}
              className={cx("menu")}
              to={e.to}
              spy={true}
              smooth={true}
              offset={-70}
              key={i}
            >
              <div className={cx("flex")}>
                <p className={`title`}>{e.name}</p>
                <span className={`span ${i === active ? "active" : ""}`}></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu2;
