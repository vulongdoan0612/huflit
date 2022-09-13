import classNames from "classnames/bind";
import styles from "./Introduce.module.scss";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const cx = classNames.bind(styles);

function Introduce2(props) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 100,
    });
  }, []);
  return (
    <div className={cx("part2")}>
      <div className={cx("introduce2")}>
        <div  className={cx("contentIntro2")}>
          <h1>Thưởng thức trên TV của bạn.</h1>
          <h2>
            Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu
            phát Blu-ray và nhiều thiết bị khác.
          </h2>
        </div>
        <div className={cx("movieIntro2")}>
          <div className={cx("movieImg2")}>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"></img>
          </div>
          <div className={cx("movieVideo2")}>
            <ReactPlayer
              controls={false}
              autoPlay={true}
              playing={true}
              className={cx("video")}
              width="100%"
              height="100%"
              volume={1}
              muted={true}
              url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            ></ReactPlayer>
          </div>
        </div>
      </div>
      <div className={cx("introduce3")}>
        <div className={cx("movieIntro3")}>
          <div className={cx("movieImg3")}>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"></img>
          </div>
          <div className={cx("downIntro3")}>
            <div className={cx("downImg")}>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"></img>
            </div>
            <div className={cx("downContent")}>
              <p className={cx("downTitle")}>Cậu bé mất tích</p>
              <p className={cx("downInfo")}>Đang tải xuống</p>
            </div>
            <div className={cx("downIcon")}>
              <FontAwesomeIcon icon={faArrowAltCircleDown}></FontAwesomeIcon>
            </div>
          </div>
        </div>
        <div  className={cx("contentIntro3")}>
          <h1>Tải xuống nội dung để xem ngoại tuyến.</h1>
          <h2>
            Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để
            xem.
          </h2>
        </div>
      </div>
      <div className={cx("introduce4")}>
        <div  className={cx("titleIntro4")}>
          <h1 className={cx("titleIntro4")}>Xem ở mọi nơi.</h1>
        </div>
        <div  className={cx("contentIntro4")}>
          <h3 className={cx("contentIntro4")}>
            Phát trực tuyến không giới hạn phim và chương trình truyền hình trên
            điện thoại, máy tính bảng, máy tính xách tay và TV.
          </h3>
        </div>
      </div>
      <div className={cx("introduce3")}>
        <div  className={cx("movieIntro5")}>
          <div className={cx("movieImg3a")}>
            <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbtRHxTEgmwtFXR4vBnwSO9UzWSascscH0PRpGcXYVkyVez31FciwrQ4bmD41KIrsypJG4Bf54yOJL82SDLL54SGCIdZov0ySklR.png?r=df6"></img>
          </div>
        </div>
        <div  className={cx("contentIntro3")}>
          <h1>Tạo hồ sơ cho trẻ em.</h1>
          <h2>
            Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích
            trong một không gian riêng. Tính năng này đi kèm miễn phí với tư
            cách thành viên của bạn.
          </h2>
        </div>
      </div>
      <div className={cx("introducecolor")}>
        <div className={cx("introduce5")}>
          <div
            
         
            className={cx("contentIntro5")}
          >
            <h1>
              Bạn có điện thoại Android? Hãy thử gói dịch vụ miễn phí mới của
              chúng tôi!
            </h1>
            <h2>
              Xem các bộ phim và chương trình truyền hình mới được tuyển chọn mà
              không cần cung cấp thông tin thanh toán!
            </h2>
          </div>
          <div className={cx("movieIntro5")}>
            <div className={cx("movieImg5")}>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce2;
