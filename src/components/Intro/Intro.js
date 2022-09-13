import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import ReactPlayer from "react-player";
import classNames from "classnames/bind";
import styles from "./Intro.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
//hiệu ứng animation
import AOS from "aos";
import "aos/dist/aos.css";

const cx = classNames.bind(styles);

function Intro() {
  //hiệu ứng animation
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 800,
    });
  }, []);
  //----------------
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <ReactPlayer
        
        controls={false}
        autoPlay={true}
        playing={true}
        className={cx("video")}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/507695529"
      ></ReactPlayer>
      {/*-------------------------------------------------------------------------------- */}
      <div className={cx("overview")}>
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className={cx("title")}
        >
          {" "}
          NETFLIX The Rain
        </h1>
        <div className={cx("flex")}>
          <h3
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            className={cx("info")}
          >
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate, fugit.
          </h3>
          {/*Hàm để tạo btn tắt/mở volume-------------------------------- */}
          {isMuted ? (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={cx("icon")}
              // Hàm để tạo btn tắt/mở volume
              onClick={() => setIsMuted((prev) => !prev)}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={cx("icon")}
              // Hàm để tạo btn tắt/mở volume
              onClick={() => setIsMuted((prev) => !prev)}
            ></FontAwesomeIcon>
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro;
